"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getDealershipInfo, updateDealershipHours } from "../actions";
import { toast } from "sonner";

const DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const DAY_LABELS = {
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
  SUNDAY: "Sunday",
};

export default function DealershipHoursForm() {
  const [dealership, setDealership] = useState(null);
  const [hours, setHours] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadDealershipInfo();
  }, []);

  const loadDealershipInfo = async () => {
    setLoading(true);
    const result = await getDealershipInfo();

    if (result.success) {
      setDealership(result.dealership);

      const hoursMap = {};
      DAYS.forEach(day => {
        const existing = result.dealership.workingHours.find(h => h.dayOfWeek === day);
        hoursMap[day] = existing || {
          dayOfWeek: day,
          openTime: "09:00",
          closeTime: "18:00",
          isOpen: true,
        };
      });
      setHours(hoursMap);
    }
    setLoading(false);
  };

  const handleTimeChange = (day, field, value) => {
    setHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const handleToggle = (day) => {
    setHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        isOpen: !prev[day].isOpen,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formData = {
      dealershipId: dealership.id,
      hours: Object.values(hours),
    };

    const result = await updateDealershipHours(formData);

    if (result.success) {
      toast.success("Dealership hours updated successfully");
    } else {
      toast.error(result.error || "Failed to update hours");
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8">
          <div className="text-center">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dealership Hours</CardTitle>
        <CardDescription>
          Set your dealership operating hours for each day of the week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {DAYS.map((day) => (
            <div key={day} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-32">
                <Label className="text-base font-semibold">{DAY_LABELS[day]}</Label>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  checked={hours[day]?.isOpen}
                  onCheckedChange={() => handleToggle(day)}
                />
                <span className="text-sm text-gray-600">
                  {hours[day]?.isOpen ? "Open" : "Closed"}
                </span>
              </div>

              {hours[day]?.isOpen && (
                <>
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`${day}-open`} className="text-sm">From</Label>
                    <Input
                      id={`${day}-open`}
                      type="time"
                      value={hours[day]?.openTime || "09:00"}
                      onChange={(e) => handleTimeChange(day, "openTime", e.target.value)}
                      className="w-32"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Label htmlFor={`${day}-close`} className="text-sm">To</Label>
                    <Input
                      id={`${day}-close`}
                      type="time"
                      value={hours[day]?.closeTime || "18:00"}
                      onChange={(e) => handleTimeChange(day, "closeTime", e.target.value)}
                      className="w-32"
                    />
                  </div>
                </>
              )}
            </div>
          ))}

          <div className="flex justify-end">
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

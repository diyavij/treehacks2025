import { HealthMetric } from "@/components/health-metric"
import { Activity, Heart, Moon } from "lucide-react"

async function getTerraData() {
  // Simulating API call
  return {
    steps: 8234,
    sleepHours: 7.5,
    heartRate: 72,
  }
}

export default async function Dashboard() {
  const terraData = await getTerraData()

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-primary">Your Wellness Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HealthMetric
          title="Daily Steps"
          value={terraData.steps}
          unit="steps"
          icon={<Activity className="w-8 h-8" />}
          gradient="from-primary to-accent"
        />
        <HealthMetric
          title="Sleep Duration"
          value={terraData.sleepHours}
          unit="hours"
          icon={<Moon className="w-8 h-8" />}
          gradient="from-secondary to-primary"
        />
        <HealthMetric
          title="Heart Rate"
          value={terraData.heartRate}
          unit="bpm"
          icon={<Heart className="w-8 h-8" />}
          gradient="from-accent to-secondary"
        />
      </div>
    </div>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Health() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Health Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Heart Rate: 72 bpm</li>
            <li>Blood Pressure: 120/80 mmHg</li>
            <li>Body Temperature: 98.6°F</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Wellness Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Personalized wellness tips based on your health data will appear here.</p>
        </CardContent>
      </Card>
    </div>
  )
}


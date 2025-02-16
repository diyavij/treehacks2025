import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Diagnosis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Symptom Checker</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Use our AI-powered symptom checker to get preliminary health insights. Remember, this is not a substitute for
          professional medical advice.
        </p>
        {/* Add symptom checker component here */}
      </CardContent>
    </Card>
  )
}


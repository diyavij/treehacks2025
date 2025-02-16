import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FriendData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Friend Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Connect with friends and view their wellness achievements here.</p>
        {/* Add friend activity component here */}
      </CardContent>
    </Card>
  )
}


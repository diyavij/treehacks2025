"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Activity, Brain, Users, Heart } from "lucide-react"
import { HeartAnimation } from "@/components/heart-animation"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <HeartAnimation />
        <div className="relative z-10 text-center space-y-6 p-8 bg-background/80 backdrop-blur-sm rounded-xl max-w-3xl">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            The Wellness Dorm
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Empowering students to achieve optimal health and balance through innovative technology and personalized
            insights.
          </p>
          <Button asChild size="lg" className="animate-pulse-scale text-xl py-6 px-8">
            <Link href="/dashboard">
              Explore Your Wellness <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="flex items-center text-2xl">
              <Activity className="mr-2 h-8 w-8" />
              Track Your Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg">
              Monitor your daily steps, workouts, and more to stay on top of your fitness goals.
            </p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Activity Tracking"
              width={400}
              height={200}
              className="mt-6 rounded-md"
            />
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="bg-secondary text-secondary-foreground">
            <CardTitle className="flex items-center text-2xl">
              <Brain className="mr-2 h-8 w-8" />
              Mental Wellness
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg">Access resources and tools to support your mental health and reduce stress.</p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Mental Wellness"
              width={400}
              height={200}
              className="mt-6 rounded-md"
            />
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="bg-accent text-accent-foreground">
            <CardTitle className="flex items-center text-2xl">
              <Users className="mr-2 h-8 w-8" />
              Connect with Friends
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg">Share your progress and motivate each other on your wellness journeys.</p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Friend Connection"
              width={400}
              height={200}
              className="mt-6 rounded-md"
            />
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="bg-muted text-muted-foreground">
            <CardTitle className="flex items-center text-2xl">
              <Heart className="mr-2 h-8 w-8" />
              Holistic Health
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg">Get a comprehensive view of your health, including nutrition, sleep, and more.</p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Holistic Health"
              width={400}
              height={200}
              className="mt-6 rounded-md"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


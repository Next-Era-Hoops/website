import { MapPin, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CustomTournamentMap from "@/components/custom-tournament-map"

const tournaments = [
  {
    date: "March 15",
    league: "Premier 1",
    name: "MID ATLANTIC MAYHAM",
    location: "Lancaster, PA - Spooky Nook Sports",
    isMadeCircuit: false,
  },
  {
    date: "April 5",
    league: "MADE CIRCUIT",
    name: "Circuit @ Spooky Nook",
    location: "Lancaster, PA - Spooky Nook Sports",
    isMadeCircuit: true,
  },
  {
    date: "April 12",
    league: "MADE Hoops",
    name: "EAST MANIA",
    location: "Washington, DC - Walter E Washington Convention Center",
    isMadeCircuit: false,
  },
  {
    date: "April 12",
    league: "MADE CIRCUIT",
    name: "Circuit @ Walter Reed CC",
    location: "Arlington, VA - Walter Reed Recreation Center",
    isMadeCircuit: true,
  },
  {
    date: "May 3",
    league: "MADE CIRCUIT",
    name: "Circuit @ York Expo Center",
    location: "York, PA - York Expo Center",
    isMadeCircuit: true,
  },
  {
    date: "May 3",
    league: "AGAME",
    name: "AGAME MAY MAYHEM",
    location: "Lancaster, PA - Spooky Nook Sports",
    isMadeCircuit: false,
  },
  {
    date: "May 10",
    league: "MADE Hoops",
    name: "VA BEACH CLASH",
    location: "Virginia Beach, VA - Virginia Beach Sports Center",
    isMadeCircuit: false,
  },
  {
    date: "May 16",
    league: "MADE CIRCUIT",
    name: "Circuit @ Baltimore CC",
    location: "Baltimore, MD - Baltimore Convention Center",
    isMadeCircuit: true,
  },
  {
    date: "May 16",
    league: "MADE Hoops",
    name: "DMV LIVE",
    location: "Baltimore, MD - Baltimore Convention Center",
    isMadeCircuit: false,
  },
  {
    date: "May 17",
    league: "Premier 1",
    name: "Capital District Classic",
    location: "Fairfax, VA - George Mason University",
    isMadeCircuit: false,
  },
  {
    date: "May 24",
    league: "MADE Hoops",
    name: "MEMORIAL DAY TAKEOVER",
    location: "District Heights, MD - Athletic Republic",
    isMadeCircuit: false,
  },
  {
    date: "May 31",
    league: "MADE CIRCUIT",
    name: "Championship - Philly Expo Center",
    location: "Philadelphia, PA - Philly Expo Center",
    isMadeCircuit: true,
  },
]

export default function TournamentSchedulePage() {
  return (
    <div className="min-h-screen bg-neh-black text-neh-white font-eurostile">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neh-cyan">NEXT ΞRA Hoops</h1>
          <p className="text-xl text-neh-white mt-2">2025 Tournament Schedule</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neh-cyan mb-4 text-center">Come Watch Us In Game</h2>
          <CustomTournamentMap />
        </section>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament, index) => (
            <Card
              key={index}
              className={`transform transition-all hover:scale-105 ${
                tournament.isMadeCircuit ? "bg-neh-cyan/10 border-neh-cyan" : "bg-neh-black/50 border-neh-white/20"
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant={tournament.isMadeCircuit ? "default" : "secondary"}>{tournament.league}</Badge>
                  <div className="flex items-center text-neh-cyan">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>
                </div>
                <CardTitle className="text-lg mt-2 text-neh-white">{tournament.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-neh-white/80">
                  <MapPin className="h-4 w-4 mr-2 text-neh-cyan" />
                  <span>{tournament.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


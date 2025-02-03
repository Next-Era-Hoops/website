"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"

// Define Location type
interface Location {
  name: string
  lat: number
  lng: number
}

// Tournament locations
const locations: Location[] = [
  { name: "PA - Spooky Nook Sports", lat: 40.0583, lng: -76.2982 },
  { name: "DC - Walter E Washington Convention Center", lat: 38.9031, lng: -77.0219 },
  { name: "PA - York Expo Center", lat: 39.9626, lng: -76.7277 },
  { name: "VA - Virginia Beach Sports Center", lat: 36.8529, lng: -75.9780 },
  { name: "MD - Baltimore Convention Center", lat: 39.2882, lng: -76.6141 },
  { name: "GMU - George Mason University", lat: 38.8315, lng: -77.3127 },
  { name: "MD - Athletic Republic", lat: 38.8513, lng: -76.8885 },
  { name: "PA - Philly Expo Center", lat: 40.1220, lng: -75.3307 },
  { name: "VA - Walter Reed Recreation Center", lat: 38.8645, lng: -77.0927 },
  { name: "MD - District Heights Athletic Republic", lat: 38.8513, lng: -76.8885 },
]

function TournamentMap() {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [leaflet, setLeaflet] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import Leaflet (avoiding SSR issues)
      import("leaflet").then((L) => {
        setLeaflet(L) // Store Leaflet in state when available
      })
    }
  }, [])

  useEffect(() => {
    if (!leaflet || !mapRef.current) return

    const L = leaflet

    const map = L.map(mapRef.current).setView([39.5, -77], 7)

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map)

    // Fix for missing marker icons in Leaflet
    Object.assign(L.Icon.Default.prototype, {
      _getIconUrl() {
        return ""
      },
    })

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })

    // Custom icon with the NEH cyan color
    const customIcon = L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background-color: #84F5D5; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    })

    locations.forEach((location) => {
      L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map).bindPopup(location.name)
    })

    return () => {
      map.remove()
    }
  }, [leaflet]) // Runs only after Leaflet is loaded

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
}

// ✅ Dynamically import TournamentMap to ensure it is client-side only
const DynamicTournamentMap = dynamic(() => Promise.resolve(TournamentMap), { ssr: false })

export default DynamicTournamentMap
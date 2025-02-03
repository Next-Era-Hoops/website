"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface Location {
  name: string
  lat: number
  lng: number
}

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
];

export default function CustomTournamentMap() {
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!mapRef.current) {
        mapRef.current = L.map("map").setView([39.5, -77], 7)

        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }).addTo(mapRef.current)

        // Fix for the marker icon issue in Leaflet
        delete (L.Icon.Default.prototype as any)._getIconUrl
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
          L.marker([location.lat, location.lng], { icon: customIcon }).addTo(mapRef.current!).bindPopup(location.name)
        })
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return <div id="map" style={{ width: "100%", height: "400px" }} />
}
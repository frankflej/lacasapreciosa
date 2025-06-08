"use client"

import { useState } from 'react'
import AdminLayout from '../layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Settings,
  Home,
  DollarSign,
  Bell,
  Shield,
  Mail,
  Globe,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false)

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your property settings, pricing, and account preferences.</p>
          </div>
        </div>

        {/* Property Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Property Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="property-name">Property Name</Label>
                <Input id="property-name" defaultValue="La Casa Preciosa" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="property-type">Property Type</Label>
                <Select defaultValue="villa">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="Beautiful coastal location, Dominican Republic" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input id="bedrooms" type="number" defaultValue="4" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input id="bathrooms" type="number" defaultValue="3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-guests">Max Guests</Label>
                <Input id="max-guests" type="number" defaultValue="8" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                className="w-full p-3 border rounded-md resize-none"
                rows={4}
                defaultValue="Luxury beachfront villa with stunning ocean views, private pool, and premium amenities. Perfect for families and groups seeking an unforgettable Caribbean experience."
              />
            </div>
          </CardContent>
        </Card>

        {/* Pricing Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Pricing Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="base-rate">Base Nightly Rate</Label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <Input id="base-rate" className="pl-8" defaultValue="280" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cleaning-fee">Cleaning Fee</Label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <Input id="cleaning-fee" className="pl-8" defaultValue="85" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="security-deposit">Security Deposit</Label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <Input id="security-deposit" className="pl-8" defaultValue="500" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Seasonal Pricing</Label>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Peak Season (Dec - Apr)</div>
                    <div className="text-sm text-gray-500">High demand period</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-red-100 text-red-800">+25%</Badge>
                    <span className="font-medium">$350/night</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Off Season (May - Nov)</div>
                    <div className="text-sm text-gray-500">Standard pricing</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-gray-100 text-gray-800">Base</Badge>
                    <span className="font-medium">$280/night</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="w-full sm:w-auto">
            <Save className="h-4 w-4 mr-2" />
            Save All Settings
          </Button>
        </div>
      </div>
    </AdminLayout>
  )
} 
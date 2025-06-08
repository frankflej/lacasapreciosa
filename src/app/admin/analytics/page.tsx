"use client"

import AdminLayout from '../layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign,
  Users,
  Star,
  BarChart3,
  Download,
  Eye
} from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Track performance metrics and business insights for La Casa Preciosa.</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Select defaultValue="30">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 3 months</SelectItem>
                <SelectItem value="365">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$15,420</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +5.2% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Guests</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +8.1% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +0.2 from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Revenue chart would be displayed here</p>
                <p className="text-sm text-gray-400">Integrate with charting library (Chart.js, Recharts, etc.)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Booking Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Booking Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-purple-100 text-purple-800">Direct</Badge>
                    <span className="text-sm">45%</span>
                  </div>
                  <span className="font-medium">$6,939</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-red-100 text-red-800">Airbnb</Badge>
                    <span className="text-sm">30%</span>
                  </div>
                  <span className="font-medium">$4,626</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-blue-100 text-blue-800">Booking.com</Badge>
                    <span className="text-sm">15%</span>
                  </div>
                  <span className="font-medium">$2,313</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-yellow-100 text-yellow-800">VRBO</Badge>
                    <span className="text-sm">10%</span>
                  </div>
                  <span className="font-medium">$1,542</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Booking Value</span>
                  <div className="flex items-center">
                    <span className="font-bold">$680</span>
                    <TrendingUp className="h-3 w-3 ml-1 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Stay Duration</span>
                  <div className="flex items-center">
                    <span className="font-bold">3.2 nights</span>
                    <TrendingUp className="h-3 w-3 ml-1 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Repeat Guest Rate</span>
                  <div className="flex items-center">
                    <span className="font-bold">22%</span>
                    <TrendingUp className="h-3 w-3 ml-1 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cancellation Rate</span>
                  <div className="flex items-center">
                    <span className="font-bold">8%</span>
                    <TrendingDown className="h-3 w-3 ml-1 text-red-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Peak Season Performance</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      February bookings are up 25% compared to January, indicating strong seasonal demand.
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Positive</Badge>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Direct Booking Growth</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Direct bookings through your website increased by 15% this month, reducing commission costs.
                    </p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Growth</Badge>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Guest Satisfaction</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Average rating improved to 4.8 stars with guests particularly praising the location and amenities.
                    </p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Excellent</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-full">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Optimize Pricing</h4>
                  <p className="text-sm text-blue-700">Consider increasing rates for peak season dates to maximize revenue.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-full">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-green-900">Marketing Focus</h4>
                  <p className="text-sm text-green-700">Direct booking success suggests investing more in website SEO and marketing.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Star className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-purple-900">Guest Experience</h4>
                  <p className="text-sm text-purple-700">High ratings indicate opportunity to implement premium services for additional revenue.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
} 
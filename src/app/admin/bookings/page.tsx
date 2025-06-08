"use client"

import { useState } from 'react'
import AdminLayout from '../layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Plus, 
  Search, 
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle
} from 'lucide-react'

// Mock booking data - replace with real data from your backend
const mockBookings = [
  {
    id: 'BK001',
    guestName: 'Maria Rodriguez',
    email: 'maria.rodriguez@email.com',
    phone: '+1 (555) 123-4567',
    checkIn: '2024-02-15',
    checkOut: '2024-02-18',
    nights: 3,
    guests: 2,
    status: 'confirmed',
    amount: 890,
    paymentStatus: 'paid',
    source: 'direct',
    createdAt: '2024-01-20'
  },
  {
    id: 'BK002',
    guestName: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 234-5678',
    checkIn: '2024-02-20',
    checkOut: '2024-02-25',
    nights: 5,
    guests: 4,
    status: 'pending',
    amount: 1250,
    paymentStatus: 'pending',
    source: 'airbnb',
    createdAt: '2024-01-25'
  },
  {
    id: 'BK003',
    guestName: 'Emma Thompson',
    email: 'emma.thompson@email.com',
    phone: '+1 (555) 345-6789',
    checkIn: '2024-02-22',
    checkOut: '2024-02-24',
    nights: 2,
    guests: 1,
    status: 'confirmed',
    amount: 560,
    paymentStatus: 'paid',
    source: 'booking.com',
    createdAt: '2024-01-28'
  },
  {
    id: 'BK004',
    guestName: 'Carlos Mendoza',
    email: 'carlos.mendoza@email.com',
    phone: '+1 (555) 456-7890',
    checkIn: '2024-02-28',
    checkOut: '2024-03-03',
    nights: 3,
    guests: 3,
    status: 'cancelled',
    amount: 980,
    paymentStatus: 'refunded',
    source: 'direct',
    createdAt: '2024-02-01'
  },
  {
    id: 'BK005',
    guestName: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 567-8901',
    checkIn: '2024-03-05',
    checkOut: '2024-03-08',
    nights: 3,
    guests: 2,
    status: 'confirmed',
    amount: 840,
    paymentStatus: 'paid',
    source: 'vrbo',
    createdAt: '2024-02-03'
  }
]

function getStatusBadge(status: string) {
  switch (status) {
    case 'confirmed':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        <CheckCircle className="w-3 h-3 mr-1" />
        Confirmed
      </Badge>
    case 'pending':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
        <Clock className="w-3 h-3 mr-1" />
        Pending
      </Badge>
    case 'cancelled':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
        <XCircle className="w-3 h-3 mr-1" />
        Cancelled
      </Badge>
    case 'checked-in':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
        <AlertCircle className="w-3 h-3 mr-1" />
        Checked In
      </Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

function getPaymentStatusBadge(status: string) {
  switch (status) {
    case 'paid':
      return <Badge variant="outline" className="text-green-600 border-green-200">Paid</Badge>
    case 'pending':
      return <Badge variant="outline" className="text-yellow-600 border-yellow-200">Pending</Badge>
    case 'refunded':
      return <Badge variant="outline" className="text-blue-600 border-blue-200">Refunded</Badge>
    case 'failed':
      return <Badge variant="outline" className="text-red-600 border-red-200">Failed</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

function getSourceBadge(source: string) {
  const sourceColors = {
    'direct': 'bg-purple-100 text-purple-800',
    'airbnb': 'bg-red-100 text-red-800',
    'booking.com': 'bg-blue-100 text-blue-800',
    'vrbo': 'bg-yellow-100 text-yellow-800',
    'expedia': 'bg-green-100 text-green-800'
  }
  
  return (
    <Badge className={`${sourceColors[source as keyof typeof sourceColors]} hover:${sourceColors[source as keyof typeof sourceColors]}`}>
      {source}
    </Badge>
  )
}

export default function BookingsPage() {
  const [bookings] = useState(mockBookings)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter
    const matchesSource = sourceFilter === 'all' || booking.source === sourceFilter
    
    return matchesSearch && matchesStatus && matchesSource
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bookings Management</h1>
            <p className="text-gray-600">Manage all your property reservations and guest information.</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Booking
          </Button>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filters & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by guest name, email, or booking ID..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="checked-in">Checked In</SelectItem>
                </SelectContent>
              </Select>

              {/* Source Filter */}
              <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="direct">Direct</SelectItem>
                  <SelectItem value="airbnb">Airbnb</SelectItem>
                  <SelectItem value="booking.com">Booking.com</SelectItem>
                  <SelectItem value="vrbo">VRBO</SelectItem>
                  <SelectItem value="expedia">Expedia</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Bookings ({filteredBookings.length})</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Guest</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{booking.guestName}</div>
                          <div className="text-sm text-gray-500">{booking.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{booking.checkIn}</div>
                          <div className="text-sm text-gray-500">to {booking.checkOut}</div>
                          <div className="text-sm text-gray-500">{booking.nights} nights</div>
                        </div>
                      </TableCell>
                      <TableCell>{booking.guests}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>{getPaymentStatusBadge(booking.paymentStatus)}</TableCell>
                      <TableCell>{getSourceBadge(booking.source)}</TableCell>
                      <TableCell className="font-medium">${booking.amount}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Booking
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="mr-2 h-4 w-4" />
                              Reschedule
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Cancel Booking
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredBookings.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No bookings found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{bookings.length}</div>
              <p className="text-sm text-gray-600">Total Bookings</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{bookings.filter(b => b.status === 'confirmed').length}</div>
              <p className="text-sm text-gray-600">Confirmed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{bookings.filter(b => b.status === 'pending').length}</div>
              <p className="text-sm text-gray-600">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                ${bookings.reduce((sum, b) => sum + b.amount, 0).toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">Total Revenue</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
} 
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
  Download,
  DollarSign,
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  RefreshCw,
  FileText
} from 'lucide-react'

// Mock payment data
const mockPayments = [
  {
    id: 'PAY001',
    bookingId: 'BK001',
    guestName: 'Maria Rodriguez',
    amount: 890,
    currency: 'USD',
    status: 'completed',
    method: 'credit_card',
    processor: 'stripe',
    transactionId: 'txn_1234567890',
    processedAt: '2024-02-10T14:30:00Z',
    description: 'Booking payment for BK001',
    fees: 28.50,
    netAmount: 861.50,
    refundable: true
  },
  {
    id: 'PAY002',
    bookingId: 'BK002',
    guestName: 'John Smith',
    amount: 1250,
    currency: 'USD',
    status: 'pending',
    method: 'bank_transfer',
    processor: 'wise',
    transactionId: 'txn_0987654321',
    processedAt: '2024-02-12T09:15:00Z',
    description: 'Booking payment for BK002',
    fees: 15.00,
    netAmount: 1235.00,
    refundable: true
  },
  {
    id: 'PAY003',
    bookingId: 'BK003',
    guestName: 'Emma Thompson',
    amount: 560,
    currency: 'USD',
    status: 'completed',
    method: 'paypal',
    processor: 'paypal',
    transactionId: 'txn_1122334455',
    processedAt: '2024-02-08T16:45:00Z',
    description: 'Booking payment for BK003',
    fees: 18.20,
    netAmount: 541.80,
    refundable: true
  },
  {
    id: 'PAY004',
    bookingId: 'BK004',
    guestName: 'Carlos Mendoza',
    amount: -980,
    currency: 'USD',
    status: 'refunded',
    method: 'credit_card',
    processor: 'stripe',
    transactionId: 'txn_5566778899',
    processedAt: '2024-02-14T11:20:00Z',
    description: 'Refund for cancelled booking BK004',
    fees: -31.50,
    netAmount: -948.50,
    refundable: false
  },
  {
    id: 'PAY005',
    bookingId: 'BK005',
    guestName: 'Sarah Johnson',
    amount: 840,
    currency: 'USD',
    status: 'failed',
    method: 'credit_card',
    processor: 'stripe',
    transactionId: 'txn_9988776655',
    processedAt: '2024-02-15T13:10:00Z',
    description: 'Failed payment for BK005',
    fees: 0,
    netAmount: 0,
    refundable: false
  }
]

function getStatusBadge(status: string) {
  switch (status) {
    case 'completed':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        <CheckCircle className="w-3 h-3 mr-1" />
        Completed
      </Badge>
    case 'pending':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
        <Clock className="w-3 h-3 mr-1" />
        Pending
      </Badge>
    case 'failed':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
        <XCircle className="w-3 h-3 mr-1" />
        Failed
      </Badge>
    case 'refunded':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
        <RefreshCw className="w-3 h-3 mr-1" />
        Refunded
      </Badge>
    case 'processing':
      return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
        <AlertCircle className="w-3 h-3 mr-1" />
        Processing
      </Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

function getMethodBadge(method: string) {
  const methodNames = {
    'credit_card': 'Credit Card',
    'debit_card': 'Debit Card',
    'paypal': 'PayPal',
    'bank_transfer': 'Bank Transfer',
    'wire_transfer': 'Wire Transfer',
    'crypto': 'Cryptocurrency'
  }
  
  return (
    <Badge variant="outline" className="font-normal">
      <CreditCard className="w-3 h-3 mr-1" />
      {methodNames[method as keyof typeof methodNames] || method}
    </Badge>
  )
}

export default function PaymentsPage() {
  const [payments] = useState(mockPayments)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [methodFilter, setMethodFilter] = useState('all')

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter
    const matchesMethod = methodFilter === 'all' || payment.method === methodFilter
    
    return matchesSearch && matchesStatus && matchesMethod
  })

  const totalRevenue = payments
    .filter(p => p.status === 'completed' && p.amount > 0)
    .reduce((sum, p) => sum + p.amount, 0)

  const pendingAmount = payments
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.amount, 0)

  const refundedAmount = payments
    .filter(p => p.status === 'refunded')
    .reduce((sum, p) => sum + Math.abs(p.amount), 0)

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Payments Management</h1>
            <p className="text-gray-600">Track all transactions, process refunds, and manage payment methods.</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Process Manual Payment
          </Button>
        </div>

        {/* Payment Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Completed payments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${pendingAmount.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Awaiting processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Refunded</CardTitle>
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${refundedAmount.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total refunds issued</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed Payments</CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payments.filter(p => p.status === 'failed').length}</div>
              <p className="text-xs text-muted-foreground">Need attention</p>
            </CardContent>
          </Card>
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
                  placeholder="Search by guest name, booking ID, or transaction ID..."
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
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                </SelectContent>
              </Select>

              {/* Method Filter */}
              <Select value={methodFilter} onValueChange={setMethodFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="credit_card">Credit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  <SelectItem value="wire_transfer">Wire Transfer</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payments Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Payments ({filteredPayments.length})</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Booking</TableHead>
                    <TableHead>Guest</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Processor</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{payment.bookingId}</div>
                        <div className="text-sm text-gray-500">{payment.transactionId}</div>
                      </TableCell>
                      <TableCell>{payment.guestName}</TableCell>
                      <TableCell>
                        <div className={`font-medium ${payment.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                          ${Math.abs(payment.amount).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          Net: ${Math.abs(payment.netAmount).toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      <TableCell>{getMethodBadge(payment.method)}</TableCell>
                      <TableCell>
                        <div className="font-medium capitalize">{payment.processor}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">
                          {new Date(payment.processedAt).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(payment.processedAt).toLocaleTimeString()}
                        </div>
                      </TableCell>
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
                              <FileText className="mr-2 h-4 w-4" />
                              Download Receipt
                            </DropdownMenuItem>
                            {payment.refundable && payment.status === 'completed' && (
                              <DropdownMenuItem className="text-red-600">
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Process Refund
                              </DropdownMenuItem>
                            )}
                            {payment.status === 'failed' && (
                              <DropdownMenuItem>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Retry Payment
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredPayments.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No payments found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Payment Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payments.slice(0, 3).map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      payment.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <DollarSign className={`h-4 w-4 ${
                        payment.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`} />
                    </div>
                    <div>
                      <div className="font-medium">{payment.guestName}</div>
                      <div className="text-sm text-gray-500">{payment.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${payment.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      ${Math.abs(payment.amount).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(payment.processedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  )
} 
"use client"

import { useState } from 'react'
import AdminLayout from '../layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { 
  Plus, 
  Search, 
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Shield,
  ShieldCheck,
  Users,
  Mail,
  Phone,
  Calendar
} from 'lucide-react'

// Mock admin data
const mockAdmins = [
  {
    id: 'ADM001',
    name: 'Isabella Martinez',
    email: 'isabella@lacasapreciosa.com',
    phone: '+1 (555) 901-2345',
    role: 'super_admin',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastLogin: '2024-02-15T10:30:00Z',
    createdAt: '2023-01-15T08:00:00Z',
    permissions: ['all'],
    twoFactorEnabled: true
  },
  {
    id: 'ADM002',
    name: 'Carlos Rodriguez',
    email: 'carlos@lacasapreciosa.com',
    phone: '+1 (555) 012-3456',
    role: 'admin',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastLogin: '2024-02-14T16:45:00Z',
    createdAt: '2023-03-20T09:30:00Z',
    permissions: ['bookings', 'payments', 'guests'],
    twoFactorEnabled: false
  },
  {
    id: 'ADM003',
    name: 'Sofia Chen',
    email: 'sofia@lacasapreciosa.com',
    phone: '+1 (555) 123-4567',
    role: 'manager',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastLogin: '2024-02-15T09:20:00Z',
    createdAt: '2023-06-10T11:00:00Z',
    permissions: ['bookings', 'guests'],
    twoFactorEnabled: true
  },
  {
    id: 'ADM004',
    name: 'Michael Brown',
    email: 'michael@lacasapreciosa.com',
    phone: '+1 (555) 234-5678',
    role: 'support',
    status: 'inactive',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastLogin: '2024-01-28T14:15:00Z',
    createdAt: '2023-09-05T13:45:00Z',
    permissions: ['guests'],
    twoFactorEnabled: false
  }
]

function getRoleBadge(role: string) {
  switch (role) {
    case 'super_admin':
      return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
        <ShieldCheck className="w-3 h-3 mr-1" />
        Super Admin
      </Badge>
    case 'admin':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
        <Shield className="w-3 h-3 mr-1" />
        Admin
      </Badge>
    case 'manager':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        <Users className="w-3 h-3 mr-1" />
        Manager
      </Badge>
    case 'support':
      return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
        <Users className="w-3 h-3 mr-1" />
        Support
      </Badge>
    default:
      return <Badge>{role}</Badge>
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
    case 'inactive':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Inactive</Badge>
    case 'suspended':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Suspended</Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

export default function AdminsPage() {
  const [admins] = useState(mockAdmins)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.id.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesRole = roleFilter === 'all' || admin.role === roleFilter
    const matchesStatus = statusFilter === 'all' || admin.status === statusFilter
    
    return matchesSearch && matchesRole && matchesStatus
  })

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Management</h1>
            <p className="text-gray-600">Manage admin users, roles, and permissions for La Perla Negra.</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Admin
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Admin</DialogTitle>
                <DialogDescription>
                  Create a new admin account with specific roles and permissions.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Form would go here for adding new admins. Connect to your backend API.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Admin Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Admins</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{admins.length}</div>
              <p className="text-xs text-muted-foreground">All admin accounts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{admins.filter(a => a.status === 'active').length}</div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Super Admins</CardTitle>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{admins.filter(a => a.role === 'super_admin').length}</div>
              <p className="text-xs text-muted-foreground">Full access</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">2FA Enabled</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{admins.filter(a => a.twoFactorEnabled).length}</div>
              <p className="text-xs text-muted-foreground">Security enabled</p>
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
                  placeholder="Search by name, email, or admin ID..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Role Filter */}
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="super_admin">Super Admin</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Admins Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Admins ({filteredAdmins.length})</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Bulk Actions
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Admin</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>2FA</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAdmins.map((admin) => (
                    <TableRow key={admin.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={admin.avatar} alt={admin.name} />
                            <AvatarFallback>
                              {admin.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{admin.name}</div>
                            <div className="text-sm text-gray-500">{admin.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="flex items-center text-sm">
                            <Mail className="w-3 h-3 mr-1 text-gray-400" />
                            {admin.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="w-3 h-3 mr-1 text-gray-400" />
                            {admin.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getRoleBadge(admin.role)}</TableCell>
                      <TableCell>{getStatusBadge(admin.status)}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {admin.permissions.map((permission) => (
                            <Badge key={permission} variant="outline" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={admin.twoFactorEnabled ? "default" : "outline"}>
                          {admin.twoFactorEnabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm font-medium">
                            {new Date(admin.lastLogin).toLocaleDateString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(admin.lastLogin).toLocaleTimeString()}
                          </div>
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
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Admin
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Shield className="mr-2 h-4 w-4" />
                              Manage Permissions
                            </DropdownMenuItem>
                            {admin.status === 'active' ? (
                              <DropdownMenuItem className="text-yellow-600">
                                <Calendar className="mr-2 h-4 w-4" />
                                Suspend Admin
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="text-green-600">
                                <Shield className="mr-2 h-4 w-4" />
                                Activate Admin
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Admin
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredAdmins.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No admins found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Admin Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Admin Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {admins
                .sort((a, b) => new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime())
                .slice(0, 3)
                .map((admin) => (
                <div key={admin.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={admin.avatar} alt={admin.name} />
                      <AvatarFallback>
                        {admin.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{admin.name}</div>
                      <div className="text-sm text-gray-500">Last login</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {new Date(admin.lastLogin).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(admin.lastLogin).toLocaleTimeString()}
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

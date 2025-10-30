"use client"

import type React from "react"

import { useState } from "react"
import { Topbar } from "@/components/topbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Mail, Phone, MoreHorizontal, Edit, Trash2, UserPlus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type TeamMember = {
  id: string
  name: string
  email: string
  phone: string
  role: "Content Creator" | "Video Editor" | "Thumbnail Designer" | "Social Media Manager" | "Manager"
  avatar: string
  channels: string[]
  tasksAssigned: number
  tasksCompleted: number
  joinedDate: string
  status: "Active" | "Away" | "Offline"
}

const initialTeamMembers: TeamMember[] = [
  {
    id: "TM-001",
    name: "Jane Doe",
    email: "jane.doe@creator.com",
    phone: "+1 (555) 123-4567",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    channels: ["Tech Reviews Pro", "Gaming Central"],
    tasksAssigned: 12,
    tasksCompleted: 8,
    joinedDate: "2023-06-15",
    status: "Active",
  },
  {
    id: "TM-002",
    name: "Mike Roberts",
    email: "mike.roberts@creator.com",
    phone: "+1 (555) 234-5678",
    role: "Video Editor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    channels: ["Gaming Central", "Chef's Kitchen"],
    tasksAssigned: 15,
    tasksCompleted: 13,
    joinedDate: "2023-05-20",
    status: "Active",
  },
  {
    id: "TM-003",
    name: "Sarah Johnson",
    email: "sarah.johnson@creator.com",
    phone: "+1 (555) 345-6789",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    channels: ["Chef's Kitchen"],
    tasksAssigned: 10,
    tasksCompleted: 10,
    joinedDate: "2023-07-10",
    status: "Active",
  },
  {
    id: "TM-004",
    name: "Alex Lee",
    email: "alex.lee@creator.com",
    phone: "+1 (555) 456-7890",
    role: "Social Media Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    channels: ["All Channels"],
    tasksAssigned: 8,
    tasksCompleted: 5,
    joinedDate: "2023-08-01",
    status: "Away",
  },
  {
    id: "TM-005",
    name: "Emma Wilson",
    email: "emma.wilson@creator.com",
    phone: "+1 (555) 567-8901",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    channels: ["Fitness Journey"],
    tasksAssigned: 7,
    tasksCompleted: 6,
    joinedDate: "2023-09-15",
    status: "Active",
  },
  {
    id: "TM-006",
    name: "David Chen",
    email: "david.chen@creator.com",
    phone: "+1 (555) 678-9012",
    role: "Thumbnail Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    channels: ["All Channels"],
    tasksAssigned: 20,
    tasksCompleted: 18,
    joinedDate: "2023-04-05",
    status: "Active",
  },
]

const getRoleColor = (role: TeamMember["role"]) => {
  const colors = {
    "Content Creator": "bg-purple-100 text-purple-800",
    "Video Editor": "bg-blue-100 text-blue-800",
    "Thumbnail Designer": "bg-pink-100 text-pink-800",
    "Social Media Manager": "bg-green-100 text-green-800",
    Manager: "bg-orange-100 text-orange-800",
  }
  return colors[role]
}

const getStatusColor = (status: TeamMember["status"]) => {
  const colors = {
    Active: "bg-green-500",
    Away: "bg-yellow-500",
    Offline: "bg-gray-400",
  }
  return colors[status]
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers)
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || member.role === roleFilter
    return matchesSearch && matchesRole
  })

  const handleAddMember = (memberData: Partial<TeamMember>) => {
    const newMember: TeamMember = {
      id: `TM-${String(teamMembers.length + 1).padStart(3, "0")}`,
      name: memberData.name || "",
      email: memberData.email || "",
      phone: memberData.phone || "",
      role: memberData.role || "Content Creator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      channels: memberData.channels || [],
      tasksAssigned: 0,
      tasksCompleted: 0,
      joinedDate: new Date().toISOString().split("T")[0],
      status: "Active",
    }
    setTeamMembers([...teamMembers, newMember])
    setIsDialogOpen(false)
  }

  const handleEditMember = (memberData: Partial<TeamMember>) => {
    if (editingMember) {
      setTeamMembers(
        teamMembers.map((member) => (member.id === editingMember.id ? { ...member, ...memberData } : member)),
      )
      setEditingMember(null)
      setIsDialogOpen(false)
    }
  }

  const handleDeleteMember = (memberId: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== memberId))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />

      <div className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Team</h1>
            <p className="text-muted-foreground">Manage your content creation team and assign tasks</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingMember(null)}>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Team Member
              </Button>
            </DialogTrigger>
            <TeamMemberDialog
              member={editingMember}
              onSave={editingMember ? handleEditMember : handleAddMember}
              onCancel={() => {
                setIsDialogOpen(false)
                setEditingMember(null)
              }}
            />
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.filter((m) => m.status === "Active").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.reduce((sum, m) => sum + m.tasksAssigned, 0)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(
                  (teamMembers.reduce((sum, m) => sum + m.tasksCompleted, 0) /
                    teamMembers.reduce((sum, m) => sum + m.tasksAssigned, 0)) *
                    100,
                )}
                %
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search team members..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Content Creator">Content Creator</SelectItem>
              <SelectItem value="Video Editor">Video Editor</SelectItem>
              <SelectItem value="Thumbnail Designer">Thumbnail Designer</SelectItem>
              <SelectItem value="Social Media Manager">Social Media Manager</SelectItem>
              <SelectItem value="Manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} className="object-cover" />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <Badge className={getRoleColor(member.role)} variant="secondary">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => {
                          setEditingMember(member)
                          setIsDialogOpen(true)
                        }}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Member
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteMember(member.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove Member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Channels</div>
                  <div className="flex flex-wrap gap-1">
                    {member.channels.map((channel, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {channel}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                  <div>
                    <div className="text-xs text-muted-foreground">Tasks Assigned</div>
                    <div className="text-lg font-semibold">{member.tasksAssigned}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                    <div className="text-lg font-semibold text-green-600">{member.tasksCompleted}</div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  Joined {new Date(member.joinedDate).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamMemberDialog({
  member,
  onSave,
  onCancel,
}: {
  member: TeamMember | null
  onSave: (data: Partial<TeamMember>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    name: member?.name || "",
    email: member?.email || "",
    phone: member?.phone || "",
    role: member?.role || "Content Creator",
    channels: member?.channels || [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{member ? "Edit Team Member" : "Add Team Member"}</DialogTitle>
        <DialogDescription>
          {member ? "Update the team member information below." : "Add a new member to your team."}
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select
            value={formData.role}
            onValueChange={(value) => setFormData({ ...formData, role: value as TeamMember["role"] })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Content Creator">Content Creator</SelectItem>
              <SelectItem value="Video Editor">Video Editor</SelectItem>
              <SelectItem value="Thumbnail Designer">Thumbnail Designer</SelectItem>
              <SelectItem value="Social Media Manager">Social Media Manager</SelectItem>
              <SelectItem value="Manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="channels">Channels (comma separated)</Label>
          <Input
            id="channels"
            value={formData.channels.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                channels: e.target.value.split(",").map((c) => c.trim()),
              })
            }
            placeholder="Tech Reviews Pro, Gaming Central"
          />
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{member ? "Update Member" : "Add Member"}</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

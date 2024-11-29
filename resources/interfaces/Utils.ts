export interface LayoutValue {
    layoutType: string
    layoutWidth: string
    sidebarSize: string
    topbar: string
    mode: string
    position: string
    sidebarView: string
    sidebarColor: string
    sidebarImage: string
    preloader: string
    visibility: string
}

export interface Role {
    id: number
    name: string
    display_name: string
    color: string
    created_at: string
    updated_at: string
    permissions: Permission[]
}

export interface Permission {
    module: string
    module_id: number
    create: number
    read: number
    update: number
}

export interface AuthUser {
    id: number
    role_id: number
    name: string
    email: string
    email_verified_at: string | null
    two_factor_confirmed_at: string | null
    current_team_id: number | null
    profile_photo_path: string | null
    settings: string | null
    created_at: string
    updated_at: string
    profile_photo_url: string | null
    role: Role
}

export interface Menu {
    name: string
    display_name: string
    icon: string | null
    route: string | null
    module: string
    auth_level_min: number
    admin_required: boolean
    caret: boolean
    childs?: Menu[]
    type?: string
}

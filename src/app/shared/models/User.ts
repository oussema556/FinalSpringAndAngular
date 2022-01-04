

export interface User {
  userId: string | null,
  fullName: string | null,
  email: string | null,
  bio: string | null,
  profilePic: string | null,
  coverPic: string | null,
  address: string | null,
  created_at: string | null,
  phone: string | null,
  favoriteCategories: string[] | null,
  posts: any[] | null
}

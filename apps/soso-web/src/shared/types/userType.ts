export interface UserType {
  nickName: string
  photoUrl: string | null
  uuid: string
  email: string
  isNew: boolean
  provider: 'google' | 'apple'
}

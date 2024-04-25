```jsx
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'

const data = [
    {
        userName: 'Enkhjin',
        avatarImg: '/img/avatars/me.jpg',
    },
]

const Example = () => {
    return (
        <UsersAvatarGroup
            nameKey="userName"
            imgKey="avatarImg"
            avatarProps={{ size: 40 }}
            users={data}
        />
    )
}

export default Example
```

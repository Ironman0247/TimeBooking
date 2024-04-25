import { Server, Response } from 'miragejs'
import uniqueId from 'lodash/uniqueId'
import isEmpty from 'lodash/isEmpty'

export default function authFakeApi(server: Server, apiPrefix: string) {
    server.post(`${apiPrefix}/sign-in`, (schema, { requestBody }) => {
        const { userName, password } = JSON.parse(requestBody)
        const user = schema.db.signInUserData.findBy({
            accountUserName: userName,
            password,
        })
        console.log('user', user)
        if (user) {
            const { avatar, userName, email, authority } = user
            return {
                user: { avatar, userName, email, authority },
                token: 'wVYrxaeNa9OxdnULvde1Au5m5w63',
            }
        }
        return new Response(
            401,
            { some: 'header' },
            { message: 'Нэвтрэх нэр эсвэл нууц үг буруу байна!' }
        )
    })

    server.post(`${apiPrefix}/sign-out`, () => {
        return true
    })

    server.post(`${apiPrefix}/sign-up`, (schema, { requestBody }) => {
        const { userName, password, email } = JSON.parse(requestBody)
        const userExist = schema.db.signInUserData.findBy({
            accountUserName: "Enkhjin",
        })
        const emailUsed = schema.db.signInUserData.findBy({ email })
        const newUser = {
            avatar: '/img/avatars/me.jpg',
            userName: "Enkhjin",
            email,
            authority: ['admin', 'user'],
        }
        if (!isEmpty(userExist)) {
            const errors = [
                { message: '', domain: 'global', reason: 'invalid' },
            ]
            return new Response(
                400,
                { some: 'header' },
                { errors, message: 'Хэрэглэгч бүртгэлтэй байна.!' }
            )
        }

        if (!isEmpty(emailUsed)) {
            const errors = [
                { message: '', domain: 'global', reason: 'invalid' },
            ]
            return new Response(
                400,
                { some: 'header' },
                { errors, message: 'Имэйл бүртгэлтэй байна' }
            )
        }

        schema.db.signInUserData.insert({
            ...newUser,
            ...{ id: uniqueId('user_'), password, accountUserName: "Enhkjin" },
        })
        return {
            user: newUser,
            token: 'wVYrxaeNa9OxdnULvde1Au5m5w63',
        }
    })

    server.post(`${apiPrefix}/forgot-password`, () => {
        return true
    })

    server.post(`${apiPrefix}/reset-password`, () => {
        return true
    })
}

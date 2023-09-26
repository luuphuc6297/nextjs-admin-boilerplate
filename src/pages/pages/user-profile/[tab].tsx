// ** Next Import
import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import { UserProfileActiveTab } from '@/mocks/types'
import UserProfile from '@/views/pages/user-profile/UserProfile'

// ** Types

const UserProfileTab = ({ tab, data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <UserProfile tab={tab} data={data} />
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            { params: { tab: 'profile' } },
            { params: { tab: 'teams' } },
            { params: { tab: 'projects' } },
            { params: { tab: 'connections' } },
        ],
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    const res = await axios.get('/pages/profile', { params: { tab: params?.tab } })
    const data: UserProfileActiveTab = res.data

    return {
        props: {
            data,
            tab: params?.tab,
        },
    }
}

export default UserProfileTab

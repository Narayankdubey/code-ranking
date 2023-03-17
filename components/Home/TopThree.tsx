import { Card, Avatar, Typography, Rate } from 'antd';
import React, { FC } from 'react'

const data = [
    { rank: 1, name: "Narayan Dubey", img: "", totalProblem: 10, },
    { rank: 2, name: "Rupesh Sharma", img: "", totalProblem: 8, },
    { rank: 3, name: "Abhiram Paddimari", img: "", totalProblem: 4, },
]

const { Meta } = Card;
const { Title } = Typography;

interface TopThreeProps {

}

const TopThree: FC<TopThreeProps> = ({ }) => {
    return (
        <>
            <Card style={{ marginTop: 16 }} >
                <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/male/random?key=3" style={{ height: "200px", width: "200px" }} />}
                    title={<><Title>1. Narayan Dubey</Title>
                        <Rate allowHalf disabled defaultValue={2.5} />
                    </>}
                    description="Total Solved : 31"
                />
            </Card>
            <Card style={{ marginTop: 16 }} >
                <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/male/random?key=1" style={{ height: "100px", width: "100px" }} />}
                    title={<><Title level={2}>2. Rupesh Sharma</Title><Rate allowHalf disabled defaultValue={3} /></>}
                    description="Total Solved : 22"
                />
            </Card>
            <Card style={{ marginTop: 16 }} >
                <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/male/random?key=2" style={{ height: "100px", width: "100px" }} />}
                    title={<><Title level={2}>3. Abhiram</Title><Rate allowHalf disabled defaultValue={3.5} /></>}
                    description="Total Solved : 16"
                />
            </Card>
        </>
    )
}

export default TopThree;
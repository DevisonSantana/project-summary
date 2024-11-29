import Card from "../../components/Card";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo"
import { Column, Container, Title, TitleHighlight } from "./styles";

function Feed() {
    return (
        <>
            <Header auth={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    <UserInfo image="https://avatars.githubusercontent.com/u/145402199?v=4" nome="Dev" percentual={100} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/145402199?v=4" nome="Dev" percentual={50} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/145402199?v=4" nome="Dev" percentual={20} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/145402199?v=4" nome="Dev" percentual={10} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/145402199?v=4" nome="Dev" percentual={5} />
                </Column>
            </Container>
        </>
    )
}

export default Feed;
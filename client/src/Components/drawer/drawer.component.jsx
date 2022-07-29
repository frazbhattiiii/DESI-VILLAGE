import { Container, Links, Title, LinkContainer, Link, LinkIcon, DrawerFooter, LogOutImg } from "./drawer.styles"
import { ReactComponent as Reports, } from './reports.svg'
import { ReactComponent as Requests, } from './requests.svg'
import { ReactComponent as Dashboard, } from './dashboard.svg'
import { ReactComponent as Logout, } from './logout.svg'
import { isAuth } from "../../utils/auth"
import { SecondaryHeading, TertiaryHeading } from "../../abstracts/headings"
export const Drawer = () => {
    // const { user } = useSelector (
    //     ( state ) => state.user
    // );
    let user = null
    isAuth() ? user = JSON.parse(localStorage.getItem("user")) : user = null
    return (
        <Container>
            <Title>TBayEat</Title>
            <Links>
                <LinkContainer to={`/vendor/`}>
                    <LinkIcon><Dashboard /></LinkIcon>
                    <Link>Dashboard</Link>
                </LinkContainer>
                <LinkContainer to={`/vendor/reports`}>
                    <LinkIcon><Reports /></LinkIcon>
                    <Link>Reports</Link>
                </LinkContainer>
                <LinkContainer to={`/vendor/requests`}>
                    <LinkIcon><Requests /></LinkIcon>
                    <Link>Requests</Link>
                </LinkContainer>
            </Links>
            <DrawerFooter>
                <SecondaryHeading>{user.name}</SecondaryHeading>
                <br />
                <TertiaryHeading>{user.role}</TertiaryHeading>
                <LogOutImg>
                    <Logout />
                </LogOutImg>
            </DrawerFooter>
        </Container>
    )
}
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Container, Profile, Logout } from "./styles";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;

  return (
    <Container>
      <Profile>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
        <div>
          <span>Bem vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

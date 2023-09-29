import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import { CardInfo } from "../components/CardInfo";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Account = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navegate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navegate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  });

  const actualDate = new Date();

  if (userData && id !== userData.id) {
    navegate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={"xl"} color="#ffffff" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Welcome ${userData?.name}`}
              content={`${actualDate.getDay()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()}  ${actualDate.getHours()}:${actualDate.getMinutes()}`}
            />
            <CardInfo
              mainContent={`Balance`}
              content={`R$ ${userData.balance}`}
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Account;

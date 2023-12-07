// @ts-nocheck
import { Grid, Typography, styled } from '@astral/ui';

import { Indicator } from '../Indicator';

import { getUserFullInfo } from './utils';
import { useUserList } from './hooks';
import { UserStatus } from './enums';

type Props = {
  title: string;
  userName: string;
  userEmail: string;
  onClickBtn: () => void;
};

const UserInfoWrapper = styled(Grid)`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-family: Ubuntu, serif;

  border: none;
  border-radius: ${({ theme }) => theme.shape.small};
  cursor: pointer;
`;

const UserInfoTitle = styled(Typography)`
  text-align: center;
`;

const UserInfo = ({ title, userName, userEmail, onClickBtn }: Props) => {
  const list = useUserList();

  return (
    <UserInfoWrapper backgroundColor="red" spacing={2}>
      <Grid columns={3}>
        <UserInfoTitle border="2px solid" variant="h3">
          {title}
        </UserInfoTitle>
      </Grid>
      <Typography>{userName}</Typography>
      <Typography>{userEmail}</Typography>
      <Typography>{UserStatus.default}</Typography>
      <Typography>
        {getUserFullInfo({ email: userEmail, name: userName })}
      </Typography>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Indicator isShowFooter footer={<footer>footer</footer>} />
      <button onClick={onClickBtn}>btn</button>
    </UserInfoWrapper>
  );
};

export default UserInfo;

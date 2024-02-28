import { AccountManager } from "@/components/icons";
import * as GS from "../../UserSetting.styles";
import { SettingContent } from "..";

const UserSettingMemberView = () => {
  return (
    <GS.UserSettingInnerLayout>
      <GS.UserSettingTitle>회원</GS.UserSettingTitle>

      {/* Route를 통한 페이지 이동 */}
      <SettingContent
        icon={<AccountManager />}
        text={"회원 수정"}
        onClick={() => {}}
      />
    </GS.UserSettingInnerLayout>
  );
};

export default UserSettingMemberView;

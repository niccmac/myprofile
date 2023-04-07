import { Avatar, Box } from "@chakra-ui/react";
export default function ProfileAvatar() {
  return (
    <Box>
      <Avatar
        size="2xl"
        className="avatar"
        name="Nicole MacLean"
        src="20170918 - Victoria Caledonian-brewing with Nicole-0008.jpg"
        alt="Nicole"
      />
    </Box>
  );
}

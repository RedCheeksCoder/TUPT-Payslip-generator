import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAnnouncement } from "../services/apiAnnouncement";
import toast from "react-hot-toast";
import { useUser } from "../App";

const StyledAnnouncementItem = styled.div`
  margin: 0.2rem;
  border-radius: var(--border-radius-md);
  outline: 1px solid var(--color-grey-400);
  width: 25rem;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-100);
  background-color: var(--color-primary-800);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: 600;
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
    cursor: pointer;
  }
`;

const Content = styled.div`
  color: var(--color-grey-900);
  font-size: 1.5rem;
  padding: 1rem;
`;

function AnnouncementItem({ announcement }) {
  const { userEmail } = useUser();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id) => deleteAnnouncement(id),
    onSuccess: () => {
      toast.success("Announcement successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["announcement"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <StyledAnnouncementItem>
      <Title>
        <h1>{announcement.about} </h1>
        {userEmail === "diane_feria@tup.edu.ph" ? (
          <span onClick={() => mutate(announcement.id)}>
            <IoIosClose />
          </span>
        ) : (
          ""
        )}
      </Title>
      <Content>
        <p>Where: {announcement.location}</p>
        <p>When: {announcement.date}</p>
        <p>Time: {announcement.time}</p>
      </Content>
    </StyledAnnouncementItem>
  );
}

export default AnnouncementItem;

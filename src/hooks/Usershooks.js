import { useMutation, useQueryClient } from "react-query";
import {
  delUser,
  sellerapprove,
  sellerdisapprove,
  singleUser,
} from "../store/api";
const delUsers = ({ id }) => {
  return delUser(id, { action: "approve" });
};
const delSeller = ({ id }) => {
  return delUser(id);
};
const ApproveSeller = (id) => {
  return sellerapprove(id);
};
const SingleUser = (id) => {
  return singleUser(id);
};
const DisapproveSeller = (id) => {
  return sellerdisapprove(id);
};
export const useUserDel = () => {
  const queryClient = useQueryClient();
  return useMutation(delUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUsers");
    },
  });
};
export const useSellerDel = () => {
  const queryClient = useQueryClient();
  return useMutation(delSeller, {
    onSuccess: () => {
      queryClient.invalidateQueries("getSeller");
    },
  });
};
export const useUserGet = () => {
  const queryClient = useQueryClient();
  return useMutation(SingleUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("getSeller");
    },
  });
};
export const useApproveASuser = () => {
  const queryClient = useQueryClient();
  return useMutation(DisapproveSeller, {
    onSuccess: () => {
      queryClient.invalidateQueries("getSellerPending");
    },
  });
};
export const useSellerApprove = () => {
  const queryClient = useQueryClient();
  return useMutation(ApproveSeller, {
    onSuccess: () => {
      queryClient.invalidateQueries("getSellerPending");
    },
  });
};

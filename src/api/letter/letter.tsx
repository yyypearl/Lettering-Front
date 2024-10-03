import client, { authClient } from "../client";

// 편지 조회
export const getLetter = async (letterId: string, accessToken: string) => {
  return await client.get(`/api/v1/letters/${letterId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 편지 삭제
export const deleteLetter = async (letterId: string, accessToken: string) => {
  return await client.delete(`/api/v1/letters/${letterId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 실물 편지 내용 추가
export const postPhysicalLetter = async ({
  senderName,
  content,
  images,
  templateType,
}: {
  senderName: string;
  content: string;
  images: string[];
  templateType: number;
}) => {
  return await authClient.post(`/api/v1/letters/physical/receive`, {
    senderName,
    content,
    images,
    templateType,
  });
};

// 이미지 업로드
export const uploadImage = async ({ imageUrl }: { imageUrl: string }) => {
  return await authClient.post(`/api/v1/images`, {
    imageUrl,
  });
};

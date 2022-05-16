export const uploadBase64ToCloudinary = async (base64Image: any) => {
	const data = { file: `data:image/jpg;base64,${base64Image}`, upload_preset: 'moneybox' };
	const res = await fetch('https://api.cloudinary.com/v1_1/dasy7ia6p/image/upload', {
		method: 'post',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(data),
	});
	const parsedRes = await res.json();
	return parsedRes.url;
};

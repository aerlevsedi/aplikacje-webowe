import { firestore } from './init';
import {
	collection,
	addDoc,
	Timestamp,
	query,
	where,
	getDocs,
} from 'firebase/firestore';

export const addNewStudentNotice = async (user, description, tags, classes) => {
	try {
		await addDoc(collection(firestore, 'studentNotices'), {
			uid: user.uid,
			description: description,
			tags: tags,
			classes: classes,
			created: Timestamp.now(),
		});
	} catch (err) {
		console.log({ err });
	}
};

export const updateStudentNotice = async (user, description, tags, classes) => {
	try {
		await addDoc(collection(firestore, 'studentNotices'), {
			uid: user.uid,
			description: description,
			tags: tags,
			classes: classes,
			created: Timestamp.now(),
		});
	} catch (err) {
		console.log({ err });
	}
};

export const getAllStudentNotices = async (user) => {
	const q = query(
		collection(firestore, 'studentNotices'),
		where('uid', '==', user.uid)
	);

	const q_users = query(collection(firestore, 'users'));

	let userName = '';
	try {
		const querySnapshot = await getDocs(q_users);
		querySnapshot.forEach((doc) => {
			// console.log(doc.id, ' => ', doc.data());
			if (doc.id === user.uid) {
				console.log('found: ', doc.data().name);
				userName = doc.data().name;
			}
		});
	} catch (err) {
		console.log({ err });
	}

	console.log(userName);
	// const q = collection(firestore, "notices");
	const notices = [];
	try {
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			// console.log(doc.id, ' => ', doc.data());
			let notice = {
				name: userName,
				description: doc.data().description,
				tags: doc.data().tags,
				classes: doc.data().classes,
			};
			notices.push(notice);
		});
	} catch (err) {
		console.log({ err });
	}
	console.log({ notices });
	return notices;
};

import {
	IonBackButton, IonButton,
	IonButtons,
	IonCard,
	IonContent,
	IonHeader,
	IonInput,
	IonPage,
	IonTitle,
	IonToolbar
} from "@ionic/react";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseApp} from '../../firebase/firebase';
import {useState} from "react";

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const auth = getAuth(firebaseApp);
	const [user, setUser] = useState(undefined);

	const handleLogin = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				setUser(userCredential.user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return(
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons>
						<IonBackButton></IonBackButton>
						<IonTitle>Login</IonTitle>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonCard>
					{user ? (
						<p>You are logged in as {user.email}</p>
					) : (
						<form onSubmit={handleLogin}>
							<IonInput
								type="email"
								placeholder="Email"
								value={email}
								onIonChange={(e) => setEmail(e.detail.value)}
								required
							/>
							<IonInput
								type="password"
								placeholder="Password"
								value={password}
								onIonChange={(e) => setPassword(e.detail.value)}
								required
							/>
							<IonButton expand="full" type="submit">Login</IonButton>
						</form>
					)}
				</IonCard>
			</IonContent>
		</IonPage>
	)
}

export default Login;
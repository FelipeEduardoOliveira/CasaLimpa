import firebase from "./firebase";

export async function cadastraUser(
  nome,
  email,
  endereco,
  celular,
  tipo,
  uid,
  autorizado
) {
  console.log("Chamou a função");

  return await firebase
    .firestore()
    .collection("cadastraUsuario")
    .doc(`${uid}`)
    .set({
      nome,
      email,
      endereco,
      celular,
      tipo,
      autorizado,
    });
}

export async function GetUsers(data) {
  console.log(data);

  if (data === undefined || data.length === 0) {
    return await firebase
      .firestore()
      .collection("cadastraUsuario")
      // .where("tipo", "not-in", ["Gerador"])
      .get();
  } else {
    return await firebase
      .firestore()
      .collection("cadastraUsuario")
      .where("tipo", "not-in", data)
      .get();
  }
}
export async function DeletUsers(id) {
  return await firebase
    .firestore()
    .collection("cadastraUsuario")
    .doc(id)
    .delete();
}

export async function UpdateUser(id, autorizacaoDoUsuario) {
  return await firebase
    .firestore()
    .collection("cadastraUsuario")
    .doc(`${id}`)
    .update({
      autorizado: autorizacaoDoUsuario,
    });
}

export async function LogIn(email, password) {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
      window.localStorage.setItem("Auth", JSON.stringify(response));
      // alert("Deslogado com sucesso!");
      window.location.reload();
    })
    .catch((err) => {
      return err;
    });
}

export async function ForgotPassword(email) {
  return await firebase.auth().sendPasswordResetEmail(email);
}

export async function logOut() {
  await firebase
    .auth()
    .signOut()
    .then((response) => {
      console.log(response);
      window.localStorage.setItem("Auth", null);
      // alert("Deslogado com sucesso!");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      alert("Ops...");
    });
}

export function auth() {
  firebase.auth().onAuthStateChanged((user) => {
    window.localStorage.setItem("Auth", JSON.stringify(user));
  });
}

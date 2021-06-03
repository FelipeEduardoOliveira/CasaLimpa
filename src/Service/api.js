import firebase from "./firebase";

export async function cadastraUser(nome, email, endereco, celular, tipo, uid) {
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
    });
}

export async function GetUsers() {
  return await firebase.firestore().collection("cadastraUsuario").get();
}
export async function DeletUsers(id) {
  return await firebase
    .firestore()
    .collection("cadastraUsuario")
    .doc(id)
    .delete();
}

// export async function newUser(email, password) {
//   return await firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((response) => {
//       console.log(response);
//       alert("Logado");
//     })
//     .catch((error) => {
//       console.log(error);
//       alert("Erro");
//     });
// }
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

const keys = [
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyW",
  "KeyE",
  "KeyT",
  "KeyY",
  "KeyU",
];

const notes = [
  "assets/media/A.mp3",
  "assets/media/S.mp3",
  "assets/media/D.mp3",
  "assets/media/F.mp3",
  "assets/media/G.mp3",
  "assets/media/H.mp3",
  "assets/media/J.mp3",
  "assets/media/W.mp3",
  "assets/media/E.mp3",
  "assets/media/T.mp3",
  "assets/media/Y.mp3",
  "assets/media/U.mp3",
];

const playNote = (key) => {
  const audio = new Audio(notes[keys.indexOf(key)]);
  audio.play();
}

const handleKeydown = (event) => {
  if (keys.includes(event.code)) playNote(event.code);
}

document.addEventListener("keydown", handleKeydown);

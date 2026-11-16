// Forbindelse til Supabase. Begge værdier er offentlige (adgang styres af login + row level security).
// Tomme værdier = ingen synkronisering; appen virker så kun lokalt.
window.TIMEREG_CONFIG = {
  supabaseUrl: '',
  supabaseKey: '',
};

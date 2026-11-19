/* MathAnchor accounts (Supabase Auth + PostgREST over fetch). */
(function(){
"use strict";
// >>> Paste your two Supabase values here (both are safe to be public). <<<
var SB_URL="https://nijdbvhwdmdvybvvprvi.supabase.co";      // e.g. https://abcdxyz.supabase.co
var SB_KEY="sb_publishable_EE9JPAl1zN02jmb2PKHiEw_eQWnafl-";  // starts with sb_publishable_
var MSG={"en": {"bad": "Incorrect email or password.", "unconfirmed": "Please confirm your email first: open the link we sent you, then log in.", "weak": "That password is too weak. Try a longer one with letters and numbers.", "same": "Choose a password different from your old one.", "rate": "Too many attempts. Please wait a few minutes and try again.", "exists": "An account with that email already exists. Try logging in.", "expired": "This link has expired or was already used. Please request a new one.", "net": "Couldn’t reach the server. Check your connection and try again.", "generic": "Something went wrong. Please try again.", "sent": "Almost done! We sent a link to your email. Open it to confirm your account, then log in.", "recSent": "If an account exists for that email, a reset link is on its way. Check your inbox and spam.", "pwDone": "Password updated! You can log in now.", "emailSent": "We sent a confirmation link to the new address. Your email changes once you open it.", "busy": "One moment…", "delNote": "Permanently deletes your account, email and progress from our servers and this device.", "fgt": "Forgot password?", "rT": "Reset your password", "rI": "Enter your email and we’ll send you a link to choose a new password.", "rBtn": "Send reset link", "nT": "Choose a new password", "nP": "New password (8+ characters)", "cP": "Confirm new password", "nBtn": "Save password", "mism": "The passwords don’t match.", "toLogin": "Back to log in", "noUser": "You log in with your email address, so there’s no username to remember."}, "es": {"bad": "Correo o contraseña incorrectos.", "unconfirmed": "Primero confirma tu correo: abre el enlace que te enviamos y luego inicia sesión.", "weak": "Esa contraseña es demasiado débil. Prueba con una más larga, con letras y números.", "same": "Elige una contraseña distinta de la anterior.", "rate": "Demasiados intentos. Espera unos minutos e inténtalo de nuevo.", "exists": "Ya existe una cuenta con ese correo. Prueba a iniciar sesión.", "expired": "Este enlace caducó o ya se usó. Pide uno nuevo.", "net": "No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.", "generic": "Algo salió mal. Inténtalo de nuevo.", "sent": "¡Casi listo! Te enviamos un enlace por correo. Ábrelo para confirmar tu cuenta y luego inicia sesión.", "recSent": "Si existe una cuenta con ese correo, el enlace para restablecer la contraseña va en camino. Revisa tu bandeja y el spam.", "pwDone": "¡Contraseña actualizada! Ya puedes iniciar sesión.", "emailSent": "Enviamos un enlace de confirmación a la nueva dirección. Tu correo cambiará cuando lo abras.", "busy": "Un momento…", "delNote": "Elimina de forma permanente tu cuenta, tu correo y tu progreso de nuestros servidores y de este dispositivo.", "fgt": "¿Olvidaste tu contraseña?", "rT": "Restablece tu contraseña", "rI": "Escribe tu correo y te enviaremos un enlace para elegir una contraseña nueva.", "rBtn": "Enviar enlace", "nT": "Elige una contraseña nueva", "nP": "Contraseña nueva (8+ caracteres)", "cP": "Confirma la contraseña nueva", "nBtn": "Guardar contraseña", "mism": "Las contraseñas no coinciden.", "toLogin": "Volver a iniciar sesión", "noUser": "Inicias sesión con tu correo, así que no hay nombre de usuario que recordar."}, "it": {"bad": "Email o password errate.", "unconfirmed": "Conferma prima la tua email: apri il link che ti abbiamo inviato, poi accedi.", "weak": "Questa password è troppo debole. Provane una più lunga, con lettere e numeri.", "same": "Scegli una password diversa dalla precedente.", "rate": "Troppi tentativi. Attendi qualche minuto e riprova.", "exists": "Esiste già un account con questa email. Prova ad accedere.", "expired": "Questo link è scaduto o è già stato usato. Richiedine uno nuovo.", "net": "Impossibile raggiungere il server. Controlla la connessione e riprova.", "generic": "Qualcosa è andato storto. Riprova.", "sent": "Quasi fatto! Ti abbiamo inviato un link via email. Aprilo per confermare l’account, poi accedi.", "recSent": "Se esiste un account con questa email, il link per reimpostare la password è in arrivo. Controlla la posta e lo spam.", "pwDone": "Password aggiornata! Ora puoi accedere.", "emailSent": "Abbiamo inviato un link di conferma al nuovo indirizzo. L’email cambierà quando lo aprirai.", "busy": "Un attimo…", "delNote": "Elimina in modo permanente il tuo account, la tua email e i tuoi progressi dai nostri server e da questo dispositivo.", "fgt": "Password dimenticata?", "rT": "Reimposta la password", "rI": "Inserisci la tua email e ti invieremo un link per scegliere una nuova password.", "rBtn": "Invia il link", "nT": "Scegli una nuova password", "nP": "Nuova password (almeno 8 caratteri)", "cP": "Conferma la nuova password", "nBtn": "Salva la password", "mism": "Le password non coincidono.", "toLogin": "Torna all’accesso", "noUser": "Accedi con la tua email, quindi non c’è nessun nome utente da ricordare."}, "pl": {"bad": "Nieprawidłowy e-mail lub hasło.", "unconfirmed": "Najpierw potwierdź e-mail: otwórz link, który wysłaliśmy, a potem zaloguj się.", "weak": "To hasło jest zbyt słabe. Spróbuj dłuższego, z literami i cyframi.", "same": "Wybierz hasło inne niż poprzednie.", "rate": "Zbyt wiele prób. Poczekaj kilka minut i spróbuj ponownie.", "exists": "Konto z tym adresem e-mail już istnieje. Spróbuj się zalogować.", "expired": "Ten link wygasł lub został już użyty. Poproś o nowy.", "net": "Nie udało się połączyć z serwerem. Sprawdź połączenie i spróbuj ponownie.", "generic": "Coś poszło nie tak. Spróbuj ponownie.", "sent": "Prawie gotowe! Wysłaliśmy link na Twój e-mail. Otwórz go, aby potwierdzić konto, a potem zaloguj się.", "recSent": "Jeśli istnieje konto z tym adresem e-mail, link do zresetowania hasła jest w drodze. Sprawdź skrzynkę i spam.", "pwDone": "Hasło zaktualizowane! Możesz się teraz zalogować.", "emailSent": "Wysłaliśmy link potwierdzający na nowy adres. E-mail zmieni się po jego otwarciu.", "busy": "Chwileczkę…", "delNote": "Trwale usuwa Twoje konto, e-mail i postępy z naszych serwerów i z tego urządzenia.", "fgt": "Nie pamiętasz hasła?", "rT": "Zresetuj hasło", "rI": "Podaj swój e-mail, a wyślemy Ci link do ustawienia nowego hasła.", "rBtn": "Wyślij link", "nT": "Wybierz nowe hasło", "nP": "Nowe hasło (min. 8 znaków)", "cP": "Potwierdź nowe hasło", "nBtn": "Zapisz hasło", "mism": "Hasła nie są takie same.", "toLogin": "Wróć do logowania", "noUser": "Logujesz się adresem e-mail, więc nie ma nazwy użytkownika do zapamiętania."}, "ru": {"bad": "Неверная почта или пароль.", "unconfirmed": "Сначала подтвердите почту: откройте ссылку из письма, затем войдите.", "weak": "Этот пароль слишком слабый. Попробуйте более длинный, с буквами и цифрами.", "same": "Выберите пароль, отличный от прежнего.", "rate": "Слишком много попыток. Подождите несколько минут и попробуйте снова.", "exists": "Аккаунт с такой почтой уже существует. Попробуйте войти.", "expired": "Срок действия ссылки истёк или она уже использована. Запросите новую.", "net": "Не удалось связаться с сервером. Проверьте подключение и попробуйте снова.", "generic": "Что-то пошло не так. Попробуйте ещё раз.", "sent": "Почти готово! Мы отправили ссылку на вашу почту. Откройте её, чтобы подтвердить аккаунт, затем войдите.", "recSent": "Если аккаунт с такой почтой существует, ссылка для сброса пароля уже в пути. Проверьте входящие и спам.", "pwDone": "Пароль обновлён! Теперь можно войти.", "emailSent": "Мы отправили ссылку подтверждения на новый адрес. Почта изменится, когда вы её откроете.", "busy": "Минутку…", "delNote": "Навсегда удаляет ваш аккаунт, почту и прогресс с наших серверов и с этого устройства.", "fgt": "Забыли пароль?", "rT": "Сброс пароля", "rI": "Введите почту, и мы отправим ссылку для выбора нового пароля.", "rBtn": "Отправить ссылку", "nT": "Выберите новый пароль", "nP": "Новый пароль (от 8 символов)", "cP": "Повторите новый пароль", "nBtn": "Сохранить пароль", "mism": "Пароли не совпадают.", "toLogin": "Назад ко входу", "noUser": "Вы входите по почте, так что имя пользователя помнить не нужно."}, "uk": {"bad": "Невірна пошта або пароль.", "unconfirmed": "Спершу підтвердьте пошту: відкрийте посилання з листа, а потім увійдіть.", "weak": "Цей пароль надто слабкий. Спробуйте довший, з літерами та цифрами.", "same": "Оберіть пароль, відмінний від попереднього.", "rate": "Забагато спроб. Зачекайте кілька хвилин і спробуйте знову.", "exists": "Обліковий запис із такою поштою вже існує. Спробуйте увійти.", "expired": "Термін дії посилання минув або воно вже використане. Запросіть нове.", "net": "Не вдалося з’єднатися із сервером. Перевірте з’єднання й спробуйте знову.", "generic": "Щось пішло не так. Спробуйте ще раз.", "sent": "Майже готово! Ми надіслали посилання на вашу пошту. Відкрийте його, щоб підтвердити обліковий запис, а потім увійдіть.", "recSent": "Якщо обліковий запис із такою поштою існує, посилання для скидання пароля вже в дорозі. Перевірте вхідні та спам.", "pwDone": "Пароль оновлено! Тепер можна увійти.", "emailSent": "Ми надіслали посилання для підтвердження на нову адресу. Пошта зміниться, коли ви його відкриєте.", "busy": "Хвилинку…", "delNote": "Назавжди видаляє ваш обліковий запис, пошту та прогрес з наших серверів і з цього пристрою.", "fgt": "Забули пароль?", "rT": "Скидання пароля", "rI": "Введіть пошту, і ми надішлемо посилання для вибору нового пароля.", "rBtn": "Надіслати посилання", "nT": "Оберіть новий пароль", "nP": "Новий пароль (від 8 символів)", "cP": "Повторіть новий пароль", "nBtn": "Зберегти пароль", "mism": "Паролі не збігаються.", "toLogin": "Назад до входу", "noUser": "Ви входите за поштою, тож ім’я користувача пам’ятати не потрібно."}, "zh": {"bad": "邮箱或密码不正确。", "unconfirmed": "请先确认邮箱：打开我们发给你的链接，然后再登录。", "weak": "这个密码太弱。请换一个更长、包含字母和数字的密码。", "same": "请选择与旧密码不同的密码。", "rate": "尝试次数过多。请等几分钟后再试。", "exists": "该邮箱已注册账号。请尝试登录。", "expired": "此链接已过期或已被使用。请重新申请。", "net": "无法连接服务器。请检查网络后重试。", "generic": "出错了。请再试一次。", "sent": "快好了！我们已向你的邮箱发送了一个链接。打开它确认账号，然后登录。", "recSent": "如果该邮箱对应一个账号，重置密码的链接正在发送中。请查看收件箱和垃圾邮件。", "pwDone": "密码已更新！现在可以登录了。", "emailSent": "我们已向新地址发送了确认链接。打开链接后，你的邮箱才会更改。", "busy": "请稍候…", "delNote": "将从我们的服务器和此设备永久删除你的账户、邮箱和学习进度。", "fgt": "忘记密码？", "rT": "重置密码", "rI": "输入你的邮箱，我们会发送一个设置新密码的链接。", "rBtn": "发送链接", "nT": "设置新密码", "nP": "新密码（8 位以上）", "cP": "确认新密码", "nBtn": "保存密码", "mism": "两次输入的密码不一致。", "toLogin": "返回登录", "noUser": "你用邮箱登录，所以不需要记用户名。"}, "hi": {"bad": "ईमेल या पासवर्ड गलत है।", "unconfirmed": "पहले अपना ईमेल पक्का करें: हमारे भेजे लिंक को खोलें, फिर लॉग इन करें।", "weak": "यह पासवर्ड बहुत कमज़ोर है। अक्षरों और अंकों वाला लंबा पासवर्ड आज़माएँ।", "same": "ऐसा पासवर्ड चुनें जो पुराने से अलग हो।", "rate": "बहुत ज़्यादा कोशिशें हो गईं। कुछ मिनट रुककर फिर कोशिश करें।", "exists": "इस ईमेल से खाता पहले से मौजूद है। लॉग इन करके देखें।", "expired": "यह लिंक समाप्त हो गया है या पहले ही इस्तेमाल हो चुका है। नया लिंक माँगें।", "net": "सर्वर से जुड़ नहीं सके। अपना कनेक्शन जाँचें और फिर कोशिश करें।", "generic": "कुछ गड़बड़ हो गई। कृपया फिर कोशिश करें।", "sent": "लगभग हो गया! हमने आपके ईमेल पर एक लिंक भेजा है। खाता पक्का करने के लिए उसे खोलें, फिर लॉग इन करें।", "recSent": "अगर इस ईमेल से कोई खाता है, तो पासवर्ड रीसेट का लिंक रास्ते में है। अपना इनबॉक्स और स्पैम देखें।", "pwDone": "पासवर्ड अपडेट हो गया! अब आप लॉग इन कर सकते हैं।", "emailSent": "हमने नए पते पर पुष्टि का लिंक भेजा है। लिंक खोलने पर आपका ईमेल बदल जाएगा।", "busy": "एक पल…", "delNote": "हमारे सर्वर और इस डिवाइस से आपका खाता, ईमेल और प्रगति हमेशा के लिए हट जाएगी।", "fgt": "पासवर्ड भूल गए?", "rT": "पासवर्ड रीसेट करें", "rI": "अपना ईमेल लिखें, हम नया पासवर्ड चुनने का लिंक भेजेंगे।", "rBtn": "लिंक भेजें", "nT": "नया पासवर्ड चुनें", "nP": "नया पासवर्ड (8+ अक्षर)", "cP": "नया पासवर्ड दोबारा लिखें", "nBtn": "पासवर्ड सेव करें", "mism": "पासवर्ड मेल नहीं खाते।", "toLogin": "लॉग इन पर वापस जाएँ", "noUser": "आप ईमेल से लॉग इन करते हैं, इसलिए कोई यूज़रनेम याद रखने की ज़रूरत नहीं है।"}, "fr": {"bad": "E-mail ou mot de passe incorrect.", "unconfirmed": "Confirmez d’abord votre e-mail : ouvrez le lien que nous vous avons envoyé, puis connectez-vous.", "weak": "Ce mot de passe est trop faible. Essayez-en un plus long, avec des lettres et des chiffres.", "same": "Choisissez un mot de passe différent de l’ancien.", "rate": "Trop de tentatives. Attendez quelques minutes et réessayez.", "exists": "Un compte existe déjà avec cet e-mail. Essayez de vous connecter.", "expired": "Ce lien a expiré ou a déjà été utilisé. Demandez-en un nouveau.", "net": "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.", "generic": "Une erreur s’est produite. Veuillez réessayer.", "sent": "Presque fini ! Nous avons envoyé un lien à votre e-mail. Ouvrez-le pour confirmer votre compte, puis connectez-vous.", "recSent": "Si un compte existe pour cet e-mail, un lien de réinitialisation est en route. Vérifiez votre boîte de réception et vos spams.", "pwDone": "Mot de passe mis à jour ! Vous pouvez vous connecter.", "emailSent": "Nous avons envoyé un lien de confirmation à la nouvelle adresse. Votre e-mail changera quand vous l’ouvrirez.", "busy": "Un instant…", "delNote": "Supprime définitivement votre compte, votre e-mail et votre progression de nos serveurs et de cet appareil.", "fgt": "Mot de passe oublié ?", "rT": "Réinitialiser le mot de passe", "rI": "Saisissez votre e-mail et nous vous enverrons un lien pour choisir un nouveau mot de passe.", "rBtn": "Envoyer le lien", "nT": "Choisissez un nouveau mot de passe", "nP": "Nouveau mot de passe (8+ caractères)", "cP": "Confirmez le nouveau mot de passe", "nBtn": "Enregistrer le mot de passe", "mism": "Les mots de passe ne correspondent pas.", "toLogin": "Retour à la connexion", "noUser": "Vous vous connectez avec votre e-mail : il n’y a pas de nom d’utilisateur à retenir."}};
function lg(){var c="en";try{c=localStorage.getItem("ma-lang")||"en"}catch(e){}return MSG[c]?c:"en"}
function m(k,c){c=c||lg();return (MSG[c]&&MSG[c][k])||MSG.en[k]||""}
function LG(k){try{return localStorage.getItem(k)}catch(e){return null}}
function LS(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function LD(k){try{localStorage.removeItem(k)}catch(e){}}
function page(f){return new URL(f,location.href).href}
function configured(){return /^https:\/\/.+/.test(SB_URL)&&SB_KEY.indexOf("PASTE_")<0}
function fail(kind,msg,status){var e=new Error(msg||kind);e.kind=kind;e.status=status||0;return e}
async function raw(path,opt){
  opt=opt||{};
  if(!configured())throw fail("generic","Supabase URL/key not set");
  var h={apikey:SB_KEY};
  if(opt.token)h.Authorization="Bearer "+opt.token;
  if(opt.body!==undefined)h["Content-Type"]="application/json";
  if(opt.prefer)h.Prefer=opt.prefer;
  var r;
  try{r=await fetch(SB_URL+path,{method:opt.method||"GET",headers:h,body:opt.body!==undefined?JSON.stringify(opt.body):undefined})}
  catch(e){throw fail("net","network")}
  var t="",j=null;try{t=await r.text();j=t?JSON.parse(t):null}catch(e){}
  if(!r.ok)throw fail(kind(r.status,j),(j&&(j.msg||j.message||j.error_description||j.error))||("HTTP "+r.status),r.status);
  return j;
}
function kind(status,j){
  var c=String((j&&(j.error_code||j.code))||"").toLowerCase(),s=String((j&&(j.msg||j.message||j.error_description||j.error))||"").toLowerCase();
  if(status===429||c.indexOf("rate_limit")>=0||s.indexOf("rate limit")>=0||s.indexOf("seconds")>=0&&s.indexOf("only request")>=0)return "rate";
  if(c==="invalid_credentials"||s.indexOf("invalid login")>=0)return "bad";
  if(c==="email_not_confirmed"||s.indexOf("not confirmed")>=0)return "unconfirmed";
  if(c==="same_password"||s.indexOf("different from the old")>=0)return "same";
  if(c==="weak_password"||s.indexOf("password should")>=0||s.indexOf("weak")>=0)return "weak";
  if(c==="user_already_exists"||c==="email_exists"||s.indexOf("already registered")>=0)return "exists";
  if(c==="otp_expired"||s.indexOf("expired")>=0||s.indexOf("invalid or has expired")>=0)return "expired";
  return "generic";
}
function msgOf(e,c){return m(e&&e.kind&&MSG.en[e.kind]?e.kind:"generic",c)}
/* session */
function getSess(){try{var s=JSON.parse(LG("ma-auth")||"null");return s&&s.access_token&&s.refresh_token?s:null}catch(e){return null}}
function setSess(s){
  var old=LG("ma-uid");
  if(s.uid&&old&&old!==s.uid)["ma-profile","ma-done","ma-streak","ma-last"].forEach(LD); // different person on this device
  LS("ma-auth",JSON.stringify(s));LS("ma-session","1");if(s.uid)LS("ma-uid",s.uid)}
function clearSess(){LD("ma-auth");LD("ma-session")}
function now(){return Math.floor(Date.now()/1000)}
function toSess(j,email){
  var u=j.user||{};
  return {access_token:j.access_token,refresh_token:j.refresh_token,expires_at:j.expires_at||(now()+(j.expires_in||3600)),uid:u.id||(getSess()||{}).uid||"",email:(u.email||email||(getSess()||{}).email||"").toLowerCase()};
}
var refreshing=null;
async function fresh(){
  var s=getSess();if(!s)return null;
  if(s.expires_at-now()>60)return s;
  if(refreshing)return refreshing;
  refreshing=(async function(){
    try{
      var j=await raw("/auth/v1/token?grant_type=refresh_token",{method:"POST",body:{refresh_token:s.refresh_token}});
      var n=toSess(j,s.email);if(!n.uid)n.uid=s.uid;setSess(n);return n;
    }catch(e){
      if(e.kind==="net")return s; // offline: keep old session
      if(e.status===400||e.status===401||e.status===403){clearSess();return null}
      return s;
    }finally{refreshing=null}
  })();
  return refreshing;
}
async function signUp(email,pw,username,avatar){
  var data={username:String(username||"").slice(0,20)};
  if(avatar&&avatar.length<=20)data.avatar=avatar;
  var j=await raw("/auth/v1/signup?redirect_to="+encodeURIComponent(page("login.html")),{method:"POST",body:{email:email,password:pw,data:data}});
  // existing confirmed users: GoTrue returns a fake user with no identities
  if(j&&j.user&&Array.isArray(j.user.identities)&&j.user.identities.length===0)throw fail("exists","exists");
  if(j&&j.identities&&Array.isArray(j.identities)&&j.identities.length===0)throw fail("exists","exists");
  if(j&&j.access_token){var s=toSess(j,email);setSess(s);return {session:s}}
  return {confirm:true};
}
async function signIn(email,pw){
  var j=await raw("/auth/v1/token?grant_type=password",{method:"POST",body:{email:email,password:pw}});
  var s=toSess(j,email);setSess(s);await cacheProfile();return s;
}
async function cacheProfile(){
  try{
    var s=getSess(),p=await getProfile();
    if(p&&s&&p.username)LS("ma-profile",JSON.stringify({username:p.username,email:s.email,avatar:p.avatar||"anim:0"}));
  }catch(e){}
}
async function recover(email){
  await raw("/auth/v1/recover?redirect_to="+encodeURIComponent(page("reset.html")),{method:"POST",body:{email:email}});
}
async function adopt(sess){
  var u=await raw("/auth/v1/user",{token:sess.access_token});
  var s={access_token:sess.access_token,refresh_token:sess.refresh_token,expires_at:sess.expires_at||(now()+3600),uid:u.id,email:(u.email||"").toLowerCase()};
  setSess(s);await cacheProfile();return s;
}
async function updateUser(body){
  var s=await fresh();if(!s)throw fail("expired","no session",401);
  var path="/auth/v1/user";if(body.email)path+="?redirect_to="+encodeURIComponent(page("dashboard.html"));
  return raw(path,{method:"PUT",token:s.access_token,body:body});
}
async function setPasswordWithToken(access_token,pw){
  return raw("/auth/v1/user",{method:"PUT",token:access_token,body:{password:pw}});
}
async function verifyPassword(email,pw){
  try{await raw("/auth/v1/token?grant_type=password",{method:"POST",body:{email:email,password:pw}});return true}
  catch(e){if(e.kind==="bad")return false;throw e}
}
async function getProfile(){
  var s=await fresh();if(!s)return null;
  try{
    var j=await raw("/rest/v1/profiles?id=eq."+encodeURIComponent(s.uid)+"&select=username,avatar,done,streak,last_lesson",{token:s.access_token});
    return (j&&j[0])||{};
  }catch(e){return null}
}
async function putProfile(p){
  var s=await fresh();if(!s)throw fail("expired","no session",401);
  var row={id:s.uid,updated_at:new Date().toISOString()};
  for(var k in p)row[k]=p[k];
  await raw("/rest/v1/profiles?on_conflict=id",{method:"POST",token:s.access_token,prefer:"resolution=merge-duplicates,return=minimal",body:row});
}
async function deleteAccount(){
  var s=await fresh();if(!s)throw fail("expired","no session",401);
  await raw("/rest/v1/rpc/delete_my_account",{method:"POST",token:s.access_token,body:{}});
}
async function signOut(){
  var s=getSess();
  if(s){try{await raw("/auth/v1/logout",{method:"POST",token:s.access_token,body:{}})}catch(e){}}
  clearSess();
}
/* links from emails land with tokens in the URL hash: stash them and clean the address bar */
var PEND=null;
(function(){
  try{
    var h=location.hash||"";
    if(h.length>1&&/(access_token|error_code|error=)/.test(h)){
      var q=new URLSearchParams(h.slice(1)),o={};
      q.forEach(function(v,k){o[k]=v});
      sessionStorage.setItem("ma-pend",JSON.stringify(o));
      history.replaceState(null,"",location.pathname+location.search);
    }
    PEND=JSON.parse(sessionStorage.getItem("ma-pend")||"null");
  }catch(e){}
})();
function pending(){try{return JSON.parse(sessionStorage.getItem("ma-pend")||"null")||PEND}catch(e){return PEND}}
function clearPending(){PEND=null;try{sessionStorage.removeItem("ma-pend")}catch(e){}}
function wipeLocal(){["ma-profile","ma-done","ma-streak","ma-last","ma-uid","ma-auth","ma-session","ma-pend-av"].forEach(LD)}
window.MAA={m:m,lg:lg,msgOf:msgOf,configured:configured,getSess:getSess,fresh:fresh,signUp:signUp,signIn:signIn,recover:recover,adopt:adopt,updateUser:updateUser,setPasswordWithToken:setPasswordWithToken,verifyPassword:verifyPassword,getProfile:getProfile,putProfile:putProfile,deleteAccount:deleteAccount,signOut:signOut,pending:pending,clearPending:clearPending,clearSess:clearSess,wipeLocal:wipeLocal,page:page};
})();

import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import { githubLoginCallback, facebookLoginCallback } from "./controllers/userController";
import routes from "./routes";


passport.use(User.createStrategy());
passport.use(
    new GithubStrategy(
        {
            clientID: "09b28dea85cb20bb4b56",
            clientSecret: "f97a3a5b6d8e96bf71c00dcaaaaa9573a5881421",
            callbackURL: `http://localhost:4000${routes.githubCallback}`
        },
        githubLoginCallback
      )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "1063360917394573",
      clientSecret: "72e21f50842eb03c6998b1ce911071ec",
      callbackURL: `http://localhost:4000${routes.facebookCallback}`
    },
    facebookLoginCallback
  )
)
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../public/css/style.min.css';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { IntroPage } from './pages/IntroPage';
import { HomePage } from './pages/HomePage';
import { PersonalAccountCoachPage } from './pages/PersonalAccountCoachPage';
import { PersonalAccountUserPage } from './pages/PersonalAccountUserPage.tsx';
import { CreateTrainingPage } from './pages/CreateTrainingPage.tsx';
import { MyTrainingsPage } from './pages/MyTrainingsPage.tsx';
import { MyOrdersPage } from './pages/MyOrdersPage.tsx';
import { TrainingCardCoachPage } from './pages/TrainingCardCoachPage.tsx';
import { TrainingCardUserPage } from './pages/TrainingCardUserPage.tsx';
import { UserCardCoachPage } from './pages/UserCardCoachPage.tsx';
import { UserCardCoachNoButtonPage } from './pages/UserCardCoachNoButtonPage.tsx';
import { UserCardUserPage } from './pages/UserCardUserPage.tsx';
import { FriendsListCoachPage } from './pages/FriendsListCoachPage.tsx';
import { FriendsListUserPage } from './pages/FriendsListUserPage.tsx';
import { TrainingCatalogPage } from './pages/TrainingCatalogPage.tsx';
import { QuestionnaireCoachPage } from './pages/QuestionnaireCoachPage.tsx';
import { QuestionnaireUserPage } from './pages/QuestionnaireUserPage.tsx';
import { MyPurchasesPage } from './pages/MyPurchasesPage.tsx';
import { TrainingDiaryPage } from './pages/TrainingDiaryPage.tsx';
import { UsersCatalogPage } from './pages/UsersCatalogPage.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/coach" element={<PersonalAccountCoachPage />} />
        <Route path="/user" element={<PersonalAccountUserPage />} />
        <Route path="/create-training" element={<CreateTrainingPage />} />
        <Route path="/my-trainings" element={<MyTrainingsPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
        <Route path="/training-card-coach" element={<TrainingCardCoachPage />} />
        <Route path="/training-card-user" element={<TrainingCardUserPage />} />
        <Route path="/user-card-coach" element={<UserCardCoachPage />} />
        <Route path="/user-card-coach-no-button" element={<UserCardCoachNoButtonPage />} />
        <Route path="/user-card-user" element={<UserCardUserPage />} />
        <Route path="/friends-list-coach" element={<FriendsListCoachPage />} />
        <Route path="/friends-list-user" element={<FriendsListUserPage />} />
        <Route path="/training-catalog" element={<TrainingCatalogPage />} />
        <Route path="/questionnaire-coach" element={<QuestionnaireCoachPage />} />
        <Route path="/questionnaire-user" element={<QuestionnaireUserPage />} />
        <Route path="/my-purchases" element={<MyPurchasesPage />} />
        <Route path="/training-diary" element={<TrainingDiaryPage />} />
        <Route path="/users-catalog" element={<UsersCatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

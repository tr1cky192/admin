
import { routes } from 'routes/routesConfig';
import { Link } from 'react-router-dom';
// import { LoaderMiddleware } from 'components/shared/Loader/HomeLoader/LoaderMiddleware';
import {
  MowgliList,
  MowgListBlock,
  MowgliBookingMainPage,
  StaticBlock,
  StaticLine,
  VerificationList,
} from './MowgliBookingPage.styled';


// console.log(routes)


export const MowgliBookingPage = () => (
  <MowgliBookingMainPage>
    <MowgliList>
      <MowgListBlock>
        <Link to={routes.verification.path.verificationId} style={{color: "inherit"}}>
          {/* <div>
          <CustomLoaderMiddleware path={routes.verification.path.verificationId}> */}
          <h1>Objects Verification</h1>
          <VerificationList>
            <span>105</span> <p> objects are waiting </p>
          </VerificationList>
          {/* </CustomLoaderMiddleware>
        </div> */}
        </Link>
      </MowgListBlock>
      <MowgListBlock>
        <h1>Finance</h1>
      </MowgListBlock>
    </MowgliList>

    <MowgliList>
      <MowgListBlock>
        <h1>Statistics and access to cabinets</h1>
        <StaticBlock>
          <StaticLine>
            <p>Users:</p>
            <span>0</span>
          </StaticLine>
          <StaticLine>
            <p>Hoteliers:</p>
            <span>0</span>
          </StaticLine>
          <StaticLine>
            <p>Objects:</p>
            <span>0</span>
          </StaticLine>
          <StaticLine>
            <p>Booking Options:</p>
            <span>0</span>
          </StaticLine>
        </StaticBlock>
      </MowgListBlock>
      <MowgListBlock>
        <h1>Blog</h1>
      </MowgListBlock>
    </MowgliList>
  </MowgliBookingMainPage>
);

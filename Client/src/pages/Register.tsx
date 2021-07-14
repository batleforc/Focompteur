import * as React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../action";
import { useTranslation } from "react-i18next";
import Icon from "../components/Icon";
const Register = ({
  dispatch,
  AuthPending,
}: {
  dispatch: AppDispatch;
  AuthPending: Boolean;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("registerNewAccount")}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Username" className="sr-only">
                {t("Username")}
              </label>
              <input
                id="Username"
                name="Username"
                type="text"
                required
                className="form-input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={t("Username")}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                {t("EmailAddress")}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="new-password"
                required
                className="form-input appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={t("EmailAddress")}
              />
            </div>
            <div>
              <label htmlFor="Name" className="sr-only">
                {t("Name")}
              </label>
              <input
                id="email-address"
                name="Name"
                type="Name"
                autoComplete="new-password"
                required
                className="form-input appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={t("Name")}
              />
            </div>
            <div>
              <label htmlFor="Surname" className="sr-only">
                {t("Surname")}
              </label>
              <input
                id="Surname"
                name="Surname"
                type="Surname"
                autoComplete="new-password"
                required
                className="form-input appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={t("Surname")}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {t("Password")}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                className="form-input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={t("Password")}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                {t("AllowEmail")}
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Icon
                  className={
                    !AuthPending
                      ? "h-5 w-5 fill-current text-indigo-500 group-hover:text-indigo-400"
                      : "hidden"
                  }
                  Label="lock"
                />
                <Icon
                  className={
                    AuthPending
                      ? "animate-spin -ml-1 mr-3 h-5 w-5 fill-current text-indigo-500"
                      : "hidden"
                  }
                  Label="hour-glass"
                />
              </span>
              {t("Register")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default connect(({ Auth }: RootState) => ({
  AuthPending: Auth.Pending,
}))(Register);

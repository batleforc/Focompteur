import React, { useState } from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../action";
import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import SetPin from "../../action/Auth/SetPin";
import { PinCorrect } from "../../helper/crypt";
import LogWithPin from "../../action/Auth/LogWithPin";
const PinForm = ({
  dispatch,
  AuthPending,
}: {
  dispatch: AppDispatch;
  AuthPending: boolean;
}) => {
  const [Pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("LogWithPin")}
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          {error && <span>{t("wrongSetPin")}</span>}
          <div>
            <label htmlFor="Pin" className="sr-only">
              {t("Pin")}
            </label>
            <input
              id="Pin"
              name="Pin"
              type="Pin"
              autoComplete="Pin"
              value={Pin}
              onChange={(e) => setPin(e.currentTarget.value)}
              required
              className="form-input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t("Pin")}
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (PinCorrect(Pin)) {
                  dispatch(LogWithPin({ Pin }));
                } else {
                  setError(true);
                }
              }}
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
              {t("LogWithPin")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default connect(({ Auth }: RootState) => ({
  AuthPending: Auth.Pending,
}))(PinForm);

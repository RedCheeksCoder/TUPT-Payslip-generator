import styled from "styled-components";
import EmployeeButton from "../Search/EmployeeButton";
import { useSelectedUser } from "../../App";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateAdmin, updateEmployees } from "../../services/apiEmployees";

const StyledDeduction = styled.div`
  font-family: "Poppins";
  font-size: 2rem;
  width: 80%;
  margin-bottom: 2rem;
  position: relative;
  left: 10%;

  h1,
  button {
    font-family: "Poppins";
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const InputDeductionsCol = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 0.5rem;
    margin-bottom: 2rem;
    max-height: 50rem;
    overflow-y: auto;

    @media (max-width: 1350px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
  li {
    display: flex;
    justify-content: space-between;
    outline: 1px solid var(--color-grey-200);
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1.7rem;
    @media (max-width: 1560px) {
      cursor: none;
    }

    &:hover {
      background-color: var(--color-secondary-600);
      outline: none;
    }

    input {
      width: 10rem;
      border: 0;
      border-radius: 5px;
      display: block;
      direction: rtl;
      padding-right: 1rem;
      &:focus {
        background-color: var(--color-secondary-900);
        color: var(--color-primary-900);
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
`;

const InputTotal = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style: none;
  margin-bottom: 2rem;
  gap: 2rem;
  label {
    font-weight: 600;
  }
  input {
    border: 1px solid var(--color-grey-200);
    width: 100%;
    height: auto;
    direction: rtl;
  }
`;

function InputDeductions() {
  const { selectedEmployee: employee } = useSelectedUser();
  const [updatedDeduction, setUpdatedDeduction] = useState({
    wTax: employee.wTax,
    philHealth: employee.philHealth,
    lifeAndRetirement: employee.lifeAndRetirement,
    gsisReceivables: employee.gsisReceivables,
    gsisOptLoan: employee.gsisOptLoan,
    gsisRestructured: employee.gsisRestructured,
    trainMethProg: employee.trainMethProg,
    gsisSalLoan: employee.gsisSalLoan,
    gsisPolLoan: employee.gsisPolLoan,
    gsisLowCost: employee.gsisLowCost,
    gsisEmerLoan: employee.gsisEmerLoan,
    gsisHip: employee.gsisHip,
    pagibigMpl: employee.pagibigMpl,
    carSticker: employee.carSticker,
    hdmfCont: employee.hdmfCont,
    pagibigEmer: employee.pagibigEmer,
    dorm: employee.dorm,
    landbank: employee.landbank,
    nhmfc: employee.nhmfc,
    gsisEducLoan: employee.gsisEducLoan,
    gsisEnhanced: employee.gsisEnhanced,
    gsisConsoLoan: employee.gsisConsoLoan,
    mplTup: employee.mplTup,
    tupfa: employee.tupfa,
    gsisEcard: employee.gsisEcard,
    tupteaHcard: employee.tupteaHcard,
    hdmfMp2: employee.hdmfMp2,
    coop: employee.coop,
    gsisOpsIns: employee.gsisOpsIns,
    mtif: employee.mtif,
    total: employee.total,
    netAmountDue: employee.netAmountDue,
    firstHalf: employee.firstHalf,
    secondHalf: employee.secondHalf,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value === "" || 0 ? "0.00" : value;

    setUpdatedDeduction((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  const toUpdateId = employee.id;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ updatedDeduction, toUpdateId }) =>
      employee.role === "faculty"
        ? updateEmployees(updatedDeduction, toUpdateId)
        : updateAdmin(updatedDeduction, toUpdateId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [employee.role === "faculty" ? "faculty" : "admin"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValues(updatedDeduction);
    mutate({ updatedDeduction, toUpdateId });
  };

  function checkValues(object) {
    Object.entries(object).map(([key, value]) => {
      if (!value) {
        console.log(`Value for key "${key}" is missing.`);
      }
      return null; // to satisfy the map function, as it expects a return value
    });
  }

  return (
    <StyledDeduction>
      <h1>Input deductions</h1>
      <InputDeductionsCol>
        <ul>
          <li>
            Ref-sal{" "}
            <span>
              <input
                type="number"
                name="refSal"
                defaultValue={employee.refSal}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Ref-PERA/ADA{" "}
            <span>
              <input
                type="number"
                name="refPeraAda"
                defaultValue={employee.refPeraAda}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Disallowance{" "}
            <span>
              <input
                type="number"
                name="disallowance"
                defaultValue={employee.disallowance}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            W/Tax
            <span>
              <input
                type="number"
                name="wTax"
                defaultValue={employee.wTax}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            PhilHealth
            <span>
              <input
                type="number"
                name="philHealth"
                defaultValue={employee.philHealth}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Life&Ret
            <span>
              <input
                type="number"
                name="lifeAndRetirement"
                defaultValue={employee.lifeAndRetirement}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS receivables
            <span>
              <input
                type="number"
                name="gsisReceivables"
                defaultValue={employee.gsisReceivables}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS-Opt. Loan
            <span>
              <input
                type="number"
                name="gsisOptLoan"
                defaultValue={employee.gsisOptLoan}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS Restructured
            <span>
              <input
                type="number"
                name="gsisRestructured"
                defaultValue={employee.gsisRestructured}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Train. Meth. Prog
            <span>
              <input
                type="number"
                name="trainMethProg"
                defaultValue={employee.trainMethProg}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS Sal Loan
            <span>
              <input
                type="number"
                name="gsisSalLoan"
                defaultValue={employee.gsisSalLoan}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS-Pol Loan
            <span>
              <input
                type="number"
                name="gsisPolLoan"
                defaultValue={employee.gsisPolLoan}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS- Low cost
            <span>
              <input
                type="number"
                name="gsisLowCost"
                defaultValue={employee.gsisLowCost}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS Emer. Loan
            <span>
              <input
                type="number"
                name="gsisEmerLoan"
                defaultValue={employee.gsisEmerLoan}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS HIP
            <span>
              <input
                type="number"
                name="gsisHip"
                defaultValue={employee.gsisHip}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Pagibig MPL
            <span>
              <input
                type="number"
                name="pagibigMpl"
                defaultValue={employee.pagibigMpl}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Car sticker
            <span>
              <input
                type="number"
                name="carSticker"
                defaultValue={employee.carSticker}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            HDMF Cont
            <span>
              <input
                type="number"
                name="hdmfCont"
                defaultValue={employee.hdmfCont}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Pagibig Emer
            <span>
              <input
                type="number"
                name="pagibigEmer"
                defaultValue={employee.pagibigEmer}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Dorm
            <span>
              <input
                type="number"
                name="dorm"
                defaultValue={employee.dorm}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Land Bank
            <span>
              <input
                type="number"
                name="landbank"
                defaultValue={employee.landbank}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            NHMFC
            <span>
              <input
                type="number"
                name="nhmfc"
                defaultValue={employee.nhmfc}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS-Educ Loan
            <span>
              <input
                type="number"
                name="gsisEducLoan"
                defaultValue={employee.gsisEducLoan}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS Enhance
            <span>
              <input
                type="number"
                name="gsisEnhanced"
                defaultValue={employee.gsisEnhanced}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS Conso Loan
            <span>
              <input
                type="number"
                name="gsisConsoLoan"
                defaultValue={employee.gsisConsoLoan}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            MPL-TUP
            <span>
              <input
                type="number"
                name="mplTup"
                defaultValue={employee.mplTup}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            TUPFA
            <span>
              <input
                type="number"
                name="tupfa"
                defaultValue={employee.tupfa}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS-E card
            <span>
              <input
                type="number"
                name="gsisEcard"
                defaultValue={employee.gsisEcard}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            TUPTEA Hcard
            <span>
              <input
                type="number"
                name="tupteaHcard"
                defaultValue={employee.tupteaHcard}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            HDMF-MP2
            <span>
              <input
                type="number"
                name="hdmfMp2"
                defaultValue={employee.hdmfMp2}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            Coop
            <span>
              <input
                type="number"
                name="coop"
                defaultValue={employee.coop}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            GSIS Opt. Ins
            <span>
              <input
                type="number"
                name="gsisOpsIns"
                defaultValue={employee.gsisOpsIns}
                required
                onChange={handleChange}
              />
            </span>
          </li>
          <li>
            MTIF
            <span>
              <input
                type="number"
                name="mtif"
                defaultValue={employee.mtif}
                required
                onChange={handleChange}
              />
            </span>
          </li>
        </ul>
      </InputDeductionsCol>

      <>
        <InputTotal>
          <li>
            <label>
              Total Deductions:
              <input
                type="number"
                name="total"
                defaultValue={employee.total}
                required
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              Net amount due:
              <input
                type="number"
                name="netAmountDue"
                defaultValue={employee.netAmountDue}
                required
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              First Half:
              <input
                type="number"
                name="firstHalf"
                defaultValue={employee.firstHalf}
                required
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              Second Half:
              <input
                type="number"
                name="secondHalf"
                defaultValue={employee.secondHalf}
                required
                onChange={handleChange}
              />
            </label>
          </li>
        </InputTotal>
      </>
      <Buttons>
        <EmployeeButton handleSubmit={handleSubmit} />
      </Buttons>
    </StyledDeduction>
  );
}

export default InputDeductions;

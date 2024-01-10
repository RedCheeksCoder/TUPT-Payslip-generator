import jsPDF from "jspdf";

function PrintPdf(employee) {
  const doc = new jsPDF("l", "mm", "letter");
  doc.setFont("courier").setFontSize(10);
  doc.text("TUP-Taguig Campus", 110, 10);
  doc.text("DIGITAL PAYROLL PAYMENT SLIP", 110, 15);
  doc.text("Payroll Period - January 2024", 110, 20);
  doc.text("Department: ", 10, 35);
  doc.text(
    `Employee number: ${employee.employeeNum} - SG${employee.salaryGrade} - STEP: ${employee.step}`,
    10,
    40
  );
  doc.text(`NAME: ${employee.name} - Position: ${employee.position}`, 10, 45);
  doc.text("Basic Salary", 10, 50);
  doc.text(`${employee.salary}`, 200, 50);
  doc.text("P.E.R.A", 10, 55);
  doc.text("2,000.00", 200, 55);
  doc.text("AdCom", 10, 60);
  doc.text("0.00", 200, 60);
  doc.text("----------", 200, 65);
  doc.text("GROSS AMOUNT DUE", 10, 70);
  doc.text(`${employee.grossAmount}`, 200, 70);

  doc.text("DEDUCTIONS:", 10, 75);
  /* COLUMN 1 */
  doc.text("Ref-Sal", 12, 80);
  doc.text(`${employee.refSal}`, 50, 80);

  doc.text("Ref-PERA/ADA", 12, 85);
  doc.text(`${employee.refPeraAda}`, 50, 85);

  doc.text("Disallowance", 12, 90);
  doc.text(`${employee.disallowance}`, 50, 90);

  doc.text("W/Tax", 12, 95);
  doc.text(`${employee.wTax}`, 50, 95);

  doc.text("PhilHealth", 12, 100);
  doc.text(`${employee.philHealth}`, 50, 100);

  doc.text("Life & Ret", 12, 105);
  doc.text(`${employee.lifeAndRetirement}`, 50, 105);

  doc.text("GSIS Receivables", 12, 110);
  doc.text(`${employee.gsisReceivables}`, 50, 110);

  doc.text("GSIS Opt. Loan", 12, 115);
  doc.text(`${employee.gsisOptLoan}`, 50, 115);

  doc.text("GSIS Restructured", 12, 120);
  doc.text(`${employee.gsisRestructured}`, 50, 120);

  doc.text("Train Meth Prog.", 12, 125);
  doc.text(`${employee.trainMethProg}`, 50, 125);

  doc.text("GSIS Sal Loan", 12, 130);
  doc.text(`${employee.gsisSalLoan}`, 50, 130);

  /* COLUMN 2 */
  doc.text("GSIS Pol Loan", 75, 80);
  doc.text(`${employee.gsisPolLoan}`, 113, 80);

  doc.text("GSIS Low cost", 75, 85);
  doc.text(`${employee.gsisLowCost}`, 113, 85);

  doc.text("GIS Emer Loan", 75, 90);
  doc.text(`${employee.gsisEmerLoan}`, 113, 90);

  doc.text("GSIS HIP", 75, 95);
  doc.text(`${employee.gsisHip}`, 113, 95);

  doc.text("PAGibig MPL", 75, 100);
  doc.text(`${employee.pagibigMpl}`, 113, 100);

  doc.text("Car Sticker", 75, 105);
  doc.text(`${employee.carSticker}`, 113, 105);

  doc.text("HDMF Cont", 75, 110);
  doc.text(`${employee.hdmfCont}`, 113, 110);

  doc.text("Pagibig Emer", 75, 115);
  doc.text(`${employee.pagibigEmer}`, 113, 115);

  doc.text("Dorm", 75, 120);
  doc.text(`${employee.dorm}`, 113, 120);

  doc.text("Landbank", 75, 125);
  doc.text(`${employee.landbank}`, 113, 125);

  doc.text("N.H.M.F.C", 75, 130);
  doc.text(`${employee.nhmfc}`, 113, 130);

  /* COLUMN 3 */
  doc.text("GSIS Educ Loan", 138, 80);
  doc.text(`${employee.gsisEducLoan}`, 176, 80);

  doc.text("GSIS Enhanced", 138, 85);
  doc.text(`${employee.gsisEnhanced}`, 176, 85);

  doc.text("GSIS Conso Loan", 138, 90);
  doc.text(`${employee.gsisConsoLoan}`, 176, 90);

  doc.text("MPL TUP", 138, 95);
  doc.text(`${employee.mplTup}`, 176, 95);

  doc.text("TUPFA", 138, 100);
  doc.text(`${employee.tupfa}`, 176, 100);

  doc.text("GSIS Ecard", 138, 105);
  doc.text(`${employee.gsisEcard}`, 176, 105);

  doc.text("TUPTEA HCARD", 138, 110);
  doc.text(`${employee.tupteaHcard}`, 176, 110);

  doc.text("HDMF MP2", 138, 115);
  doc.text(`${employee.hdmfMp2}`, 176, 115);

  doc.text("Coop", 138, 120);
  doc.text(`${employee.coop}`, 176, 120);

  doc.text("GSIS Opt Ins", 138, 125);
  doc.text(`${employee.gsisOpsIns}`, 176, 125);

  doc.text("MTIF", 138, 130);
  doc.text(`${employee.mtif}`, 176, 130);

  doc.text(`${employee.total}`, 200, 130);
  doc.text("--------", 200, 135);

  doc.text("NET AMOUNT DUE", 10, 140);
  doc.text(
    "-------------------------------------------------------------------------",
    45,
    140
  );
  doc.text(`${employee.netAmountDue}`, 200, 140);

  doc.text("1st Half-", 12, 145);
  doc.text(`${employee.firstHalf}`, 40, 145);

  doc.text("2nd Half-", 90, 145);
  doc.text(`${employee.secondHalf}`, 118, 145);

  doc.text("=========", 200, 145);

  doc.text("Prepared by: Diana Rose F. Daliva", 15, 155);
  doc.text("Admin Aide Vi", 35, 160);

  doc.text("Certified Correct: Ma. LIZETTE G. PEÑA", 100, 155);
  doc.text("Administrative Officer V - HR Mgt.", 100, 160);

  doc.text(
    "-----------------------------------------------------------------------------------------",
    10,
    170
  );
  doc.save("payslip.pdf");
}

export default PrintPdf;

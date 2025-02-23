export interface SARIProperties {
    Covid19TestedNumber: number;
    Covid19PositiveNumber: number;
    Covid19PositivePercent: number;
    EPIWeek: string;
    Month: number;
    Year: number;

    Scenario: string;
    Subtype: string;
    Count: number;
    Percentage: number;

    InfluenzaAPositive: number;
    InfluenzaBPositive: number;
    TotalTestsDone: number;
    InfluenzaAPositivePercent: number;
    InfluenzaBPositivePercent: number;
    NegativeFluPercent: number;
    NegativeFluNumber: number;

    // ------------------------------
    AH1N1Number: number;
    AH1N1NumberPercent: number;

    AH3N2Number: number;
    AH3N2NumberPercent: number;

    NonSubTypableNumber: number;
    NonSubTypableNumberPercent: number;

    NotSubTypeNumber: number;
    NotSubTypeNumberPercent: number;

    TotalInfluenzaSubTypeA: number;

    // ------------------------------

    YamagataNumber: number;
    VictoriaNumber: number;
    NotdeterminedNumber: number;
    TotalInfluenzaBLineage: number;
    YamagataNumberPercent: number;
    VictoriaNumberPercent: number;
    NotdeterminedNumberPercent: number;

    // ------------------------------

    CovidNegativeNumber: number;
    CovidPositiveNumber: number;
    CovidTestedNumber: number;
    CovidNegativeNumberPercent: number;
    CovidPositiveNumberPercent: number;

    // ------------------------------

    Covid19Tested: number;
    Covid19Positive: number;

    // ------------------------------

    InfluenzaNeg: number;
    EpiWeek: string;

    // ------------------------------

    DischargedFromHospital: number;
    DeathNumber: number;
    RefusedHospitalTreatment: number;
    AbscondedNumber: number;
    RefferedToAnotherFacilityNumber: number;
    TotalOutcome: number;
    DischargedFromHospitalPercentage: number;
    DeathPercentage: number;
    RefusedHospitalTreatmentPercentage: number;
    AbscondedPercentage: number;
    RefferedToAnotherFacilityPercentage: number;

    // ------------------------------

    InfluenzaAPositiveNumber: number;
    InfluenzaBPositiveNumber: number;
    InfluenzaABPositiveNumber: number;
    TotalTestsDoneNumber: number;
    TestedNegativeFluNumber: number;
    InfluenzaAPositivePercentage: number;
    InfluenzaBPositivePercentage: number;
    InfluenzaABPositivePercentage: number;

    // ------------------------------
    FluANotSubTypedNumber: number;
    H3N2Number: number;
    FluANotYetSubTypedNumber: number;
    FlueBNotYetDeterminedNumber: number;
    TotalFluTestNumber: number;
    NotSubTypePercentage: number;
    AH1N1Percentage: number;
    AH3N2Percentage: number;
    VictoriaPercentage: number;
    YamagataPercentage: number;
    NotDeterminedPercentage: number;


    // ------------------------------

    FluANonSubTypableNumber: number;
    FluANonSubTypablePercentage: number;
    FluANotYetSubTypedPercentage: number;
    FlueBNotYetDeterminedPercentage: number;
    H1N1Number: number;
    H1N1Percentage: number;
    H3N2Percentage: number;
    TestedNegativeFluPercentage: number;

    // ------------------------------

    Tested: number;
    InfluenzaPositivePercent: number;
    SARSCOV2PositivePercent: number;
    
    // ------------------------------
    
    SampleTestedNumber: number;
    InfluenzaPositivePercentage: number;
    InfluenzaNegativeNumber: number;
    
    // ------------------------------
    
}
async function calc() {
    try {
        const [field1Value, field2Value] = await Promise.all([get_field1(), get_field2()]);

        const field3Value = await get_field3();

        let field4Value = 0;
        const field5Value = await get_field5();

        if (field5Value > 1) {
            field4Value = await get_field4();
        }

        const result = (field1Value * field2Value) % field3Value + field4Value / field5Value;

        return result;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error; // Optionally rethrow the error if needed
    }
}


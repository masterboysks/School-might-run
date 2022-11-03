@ECHO OFF
PUSHD .
FOR /R %%d IN (.) DO (
cd "%%d"
IF EXIST *.jsx (
REN *.jsx *.tsx
)
)
POPD
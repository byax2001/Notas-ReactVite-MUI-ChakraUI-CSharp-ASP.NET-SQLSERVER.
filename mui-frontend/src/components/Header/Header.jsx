import { Link } from "react-router-dom";
import { Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import school from "./components/school.png";
import { useTheme } from "@mui/material/styles"; // Lo utilizare para cambiar la posicion de elementos en la pantalla segun el tamaño de la pantalla

export default function HeaderPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const cerrarSesion = () => {
    // Se elimina el usuario de la sesión
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box
      component="header"
      sx={{
        bgcolor: "primary.main",
        p: 2,
        color: "white",
        width: "100%", // Ocupa todo el ancho de la pantalla
        boxShadow: 2,
        mb: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
        }}
      >
        {/* Sección de Links */}
        <Grid item xs={12} sm={6} md={9}  lg={9}
          sx={{
            [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}}
          >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center",
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }

           }}>
            <Box
              component="img"
              src={school}
              alt="school"
              sx={{ maxHeight: "50px" }}
            />
            <Link
              to="/Home"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "600",
              }}
            >
              Listado
            </Link>
            <Link
              to="/regAl"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "600",
              }}
            >
              Nuevo
            </Link>
          </Box>
        </Grid>

        {/* Botón de cerrar sesión */}
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ textAlign: "right" ,
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }
        }}
        
        
        >
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={cerrarSesion}
            sx={{
              textTransform: "none",
              transition: "transform 0.2s ease-out",
              "&:active": {
                transform: "translateY(4px)",
              },
            }}
          >
            Cerrar Sesión
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
"""
Convert .txt files into sqlite for easier manipulation and queries
"""


class TableCreator():
    """Creates sqlite table from the static info text files"""

    SHAPE_TABLE = """
    CREATE TABLE shapes (
    shape_id VARCHAR(10) NOT NULL,
    shape_pt_lat DOUBLE PRECISION,
    shape_pt_lon DOUBLE PRECISION,
    shape_pt_sequence INTEGER,
    shape_dist_traveled DOUBLE PRECISION,
    PRIMARY KEY (shape_id, shape_pt_sequence)
    );
    """

    ROUTES_TABLE = """
    CREATE TABLE routes (
    route_id VARCHAR(12) PRIMARY KEY,
    agency_id VARCHAR(10),
    route_short_name VARCHAR(10),
    route_long_name VARCHAR(100)
    );
    """

    TRIPS_TABLE = """
    CREATE TABLE trips (
    route_id VARCHAR(12) NOT NULL REFERENCES routes(route_id) ON DELETE CASCADE,
    service_id VARCHAR(5),
    trip_id VARCHAR(10) PRIMARY KEY,
    direction_id VARCHAR(1),
    shape_id VARCHAR(10) REFERENCES shapes(shape_id) ON DELETE SET NULL
    );
    """

    STOPS_TABLE = """
    CREATE TABLE stops (
    stop_id VARCHAR(20) PRIMARY KEY,
    stop_name VARCHAR(100),
    stop_lat DOUBLE PRECISION,
    stop_lon DOUBLE PRECISION
    );
    """

    STOP_TIMES_TABLE = """
    CREATE TABLE stop_times (
    trip_id VARCHAR(10) NOT NULL REFERENCES trips(trip_id) ON DELETE CASCADE,
    arrival_time VARCHAR(8),
    departure_time VARCHAR(8),
    stop_id VARCHAR(20) NOT NULL REFERENCES stops(stop_id) ON DELETE CASCADE,
    stop_sequence INTEGER,
    pickup_type BOOLEAN,
    drop_off_type BOOLEAN,
    timepoint BOOLEAN
    );
    """

    AGENCY_TABLE = """
    CREATE TABLE agency (
    agency_id VARCHAR(20) PRIMARY KEY,
    agency_name VARCHAR(100)
    );
    """

    CALENDAR_TABLE = """
    CREATE TABLE calendar (
    service_id VARCHAR(5) PRIMARY KEY,
    monday BOOLEAN,
    tuesday BOOLEAN,
    wednesday BOOLEAN,
    thursday BOOLEAN,
    friday BOOLEAN,
    saturday BOOLEAN,
    sunday BOOLEAN,
    start_date VARCHAR(10),
    end_date VARCHAR(10)
    );
    """

    CALENDAR_DATES_TABLE = """
    CREATE TABLE calendar_dates (
    service_id VARCHAR(5) REFERENCES calendar(service_id) ON DELETE CASCADE,
    date VARCHAR(10) NOT NULL,
    exception_type VARCHAR(2),
    PRIMARY KEY (service_id, date));
    """

    ROUTE_ID_TO_NAME_TABLE = """
    CREATE TABLE route_id_to_name (
    route_id VARCHAR(12) PRIMARY KEY REFERENCES routes(route_id) ON DELETE CASCADE,
    route_short_name VARCHAR(10)
    );
    """

    CHOSEN_ROUTES_TABLE = """
    CREATE TABLE chosen_routes (
    route_short_name VARCHAR(10) PRIMARY KEY REFERENCES routes(route_short_name) ON DELETE CASCADE
    );
    """

    def __init__(self, conn):
        self.conn = conn
        self.cursor = conn.cursor()

    def create_table(self, name, table):
        """
        Creates an sqlite table
        """
        self.cursor.execute(f"DROP TABLE IF EXISTS {name}")
        self.cursor.execute(table)
        self.conn.commit()

    def create_tables(self):
        """
        Creates all tables needed
        """
        self.create_table("shapes", self.SHAPE_TABLE)
        self.create_table("routes", self.ROUTES_TABLE)
        self.create_table("trips", self.TRIPS_TABLE)
        self.create_table("stops", self.STOPS_TABLE)
        self.create_table("stop_times", self.STOP_TIMES_TABLE)
        self.create_table("route_id_to_name", self.ROUTE_ID_TO_NAME_TABLE)
        self.create_table("chosen_routes", self.CHOSEN_ROUTES_TABLE)
        self.create_table("agency", self.AGENCY_TABLE)
        self.create_table("calendar", self.CALENDAR_TABLE)
        self.create_table("calendar_dates", self.CALENDAR_DATES_TABLE)


if __name__ == "__main__":
    from .db_connection import create_connection, close_connection
    test_conn = create_connection()
    cr = TableCreator(test_conn)
    cr.create_table("chosen_routes", cr.CHOSEN_ROUTES_TABLE)
    cr.create_table("routes", cr.ROUTES_TABLE)
    cr.create_table("route_id_to_name", cr.ROUTE_ID_TO_NAME_TABLE)
    close_connection(test_conn)
